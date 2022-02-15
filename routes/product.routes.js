const { createProduct, 
        getProduct, 
        getProducts, 
        deleteProduct, 
        updateProduct,} = require("../controllers/product.controllers");
const router = require("express").Router();

router.post('/', createProduct);
router.get('/:productId', getProduct)
router.get('/', getProducts)
router.put('/:productId', updateProduct)
router.delete('/:productId', deleteProduct)
module.exports = router