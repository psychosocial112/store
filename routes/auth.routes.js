const router = require("express").Router();
const User = require("../models/user.models");
const Address = require("../models/address.models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(422).json("email already exist");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
    try {
        const newAddress = new Address({
            street: req.body.street,
            city: req.body.city,
            country: req.body.country,
            zipCode: req.body.zipCode,
        });

        const salt = await bcryptjs.genSalt(16);
        const hashedPassword = await bcryptjs.hash(req.body.password, salt);

        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            address: newAddress,
        });

        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
    } catch (err) {
        return res.status(500).json(err);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json("Wrong Email/Password");
        }
        const isValidPassword = await bcryptjs.compare(
            req.body.password,
            user.password
        );
        if (!isValidPassword) {
            return res.status(401).json("Wrong Email/Password");
        }

        const token = jwt.sign(
            { _id: user._id, email: user.email, cart: user.cart },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2 days",
            }
        );

        return res.status(200).json({ user: user, token });
    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
