const Cart = require("../models/cart.models");

const getOwnedCard = async (req, res) => {
    const cartId = req.verifiedUser.cart;

    try {
        const cart = await Cart.findById(cartId);
        return res.status(200).json(cart);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const emptyCart = async (req, res) => {
    const cartId = req.verifiedUser.cartId;

    try {
        const cart = await Cart.findById(cartId);
        cart.items = [];
        cart.totalPrice = 0;
        cart.totalPriceWithTax = 0;
        const savedCard = await cart.save();
        return res.status(200).json(savedCard);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const addItemToCart = async (req, res) => {
    const cartId = req.verifiedUser.cart;

    try {
        const cart = await Cart.findById(cartId);
        cart.items.push(req.body.item);
        const savedCard = await cart.save();
        return res.status(200).json(savedCard);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const removeItemFromCart = async (req, res) => {
    const cartId = req.verifiedUser.cart;

    try {
        const cart = await Cart.findById(cartId);
        const items = cart.items.filter(
            (item) => item.product.toString() !== req
        );
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports.getOwnedCart = getOwnedCard;
module.exports.emptyCart = emptyCart;
module.exports.addItemToCart = addItemToCart;
module.exports.removeItemFromCart = removeItemFromCart;
