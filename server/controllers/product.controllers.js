const Product = require("../models/product.models");
const Category = require("../models/category.models");


const createProduct = async (req, res) => {
    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: req.body.image,
        reference: req.body.reference,
    });
    try {
        const savedProduct = await newProduct.save();
        return res.status(201).json(savedProduct);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getProduct = async (req, res) => {
    const slug = req.params.productSlug;

    try {
        const product = await Product.findOne({ slug: slug }).populate("category");
        return res.status(200).json(product);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const getProducts = async (req, res) => {
    const limit = req.query.limit ? parseInt(req.query.limit) : 8;
    let filter = {};
    if (req.query.category) {
        filter.category = (
            await Category.findOne({
                slug: req.query.category,
            })
        )?._id;
    }
    if (req.query.q) {
        filter.title = { $regex: ".*" + req.query.q + ".*", $options: "i" };
    }
    try {
        const products = await Product.find(filter).limit(limit).populate("category");
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const deleteProduct = async (req, res) => {
    const id = req.params.productId;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        return res.status(200).json(deletedProduct);
    } catch (err) {
        return res.status(500).json(err);
    }
};
const updateProduct = async (req, res) => {
    const id = req.params.productId;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        return res.status(200).json(updatedProduct);
    } catch (err) {
        return res.status(500).json(err);
    }
};
module.exports.createProduct = createProduct;
module.exports.updateProduct = updateProduct;
module.exports.getProduct = getProduct;
module.exports.getProducts = getProducts;
module.exports.deleteProduct = deleteProduct;