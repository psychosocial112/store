const { createCategory,
    getCategory,
    getCategories, 
    deleteCategory, 
    updateCategory } = require("../controllers/category.controllers");

const router = require("express").Router();

router.post('/', createCategory)
router.get('/:categoryId', getCategory)
router.get('/', getCategories)
router.delete('/:categoryId', deleteCategory)
router.put('/:categoryId', updateCategory)

module.exports = router;