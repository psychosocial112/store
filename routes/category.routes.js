const {
    createCategory,
    getCategory,
    getCategories,
    deleteCategory,
    updateCategory,
} = require("../controllers/category.controllers");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

router.post("/", verifyToken, createCategory);
router.get("/:categoryId", getCategory);
router.get("/", getCategories);
router.delete("/:categoryId", verifyToken, deleteCategory);
router.put("/:categoryId", verifyToken, updateCategory);

module.exports = router;
