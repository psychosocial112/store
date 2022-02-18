const Order = require("../models/order.models");

const createOrder = async (req, res) => {
    const items = req.verifiedUser.cart.items.map((item) => {
        item.total = item.price * item.quantity;
    });

    try {
        const newOrder = new Order({
            items: items,
            address: req.verifiedUser.address,
            client: req.verifiedUser._id,
        });
        const savedOrder = await newOrder.save();
        return res.status(201).json(savedOrder);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const order = await Order.findById(orderId);
        return res.status(200).json(err);
    } catch (err) {
        return res.status(500).json(err);
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).json(orders);
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports.createOrder = createOrder;
module.exports.getOrder = getOrder;
module.exports.getOrders = getOrders;
