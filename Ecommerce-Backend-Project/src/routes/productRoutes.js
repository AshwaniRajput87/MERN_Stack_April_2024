const express = require('express');

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductHandler,
    getTop5Products,
    getProductCategories
}  = require('../controllers/productController');

const router = express.Router();

router.get('/categories', getProductCategories);
router.get('/', getProducts);
router.get('/', getTop5Products, getProductHandler);
router.get('/bigBillionDay', getProductHandler);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);



module.exports = router;