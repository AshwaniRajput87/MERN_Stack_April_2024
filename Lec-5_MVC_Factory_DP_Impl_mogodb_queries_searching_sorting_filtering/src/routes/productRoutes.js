const express = require('express');

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductHandler
}  = require('../controllers/productController');

const router = express.Router();

router.post('/', createProduct);
router.get('/', getProductHandler);
// router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);



module.exports = router;