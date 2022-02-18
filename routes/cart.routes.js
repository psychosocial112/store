const {
    addItemToCart,
    removeItemFromCart,
    getOwnedCart,
    emptyCart,
} = require("../controllers/cart.controllers");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

router.get("/me", verifyToken, getOwnedCart);
router.put("/add", verifyToken, addItemToCart);
router.put("/remove", verifyToken, removeItemFromCart);
router.put("/empty", verifyToken, emptyCart);
module.exports = router;
