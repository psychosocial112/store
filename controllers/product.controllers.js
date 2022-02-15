const Product = require("../models/product.models");
const Category = require("../models/category.models")

const createProduct = async (req, res) => {
	const newProduct = new Product({
		title: req.body.title,
		description: req.body.description,
		price: req.body.price,
		category: req.body.category
	});
	try {
		const savedProduct = await newProduct.save();
		return res.status(201).json(savedProduct);
	} catch (err) {
		return res.status(500).json(err);
	}
};

//get product by id
const getProduct = async (req, res) => {
	const productId = req.params.productId
	try {
		const product = await Product.findById(productId).populate('category')
		return res.status(200).json(product)
	} catch (err) {
		return res.status(500).json(err)
	}
}
//get products
const getProducts = async (req, res) => {
	let filter = {}
	if (req.query.category) {
		filter.category = (
			await Category.findOne({
				title: req.query.category
			})
		)?._id
	}
	try {
		const products = await Product.find(filter).populate('category')
		return res.status(200).json(products)
	} catch (err) {
		return res.status(500).json(err)
	}
}
//delete product
const deleteProduct = async (req, res) => {
	const productId = req.params.productId
	try {
		const deletedProduct = await Product.findByIdAndDelete(productId)
		return res.status(200).json(deletedProduct)
	} catch (err) {
		return res.status(500).json(err)
	}
}

const updateProduct = async (req, res) => {
	const productId = req.params.productId;

	try {
		const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, 
			{new: true,
		});
		return res.status(200).json(updatedProduct);
	} catch (err) {
		return res.status(500).json(err);
	}
};




module.exports.createProduct = createProduct;
module.exports.getProduct = getProduct;
module.exports.getProducts = getProducts;
module.exports.deleteProduct= deleteProduct;
module.exports.updateProduct = updateProduct;
