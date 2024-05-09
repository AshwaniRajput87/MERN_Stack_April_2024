const ProductModel = require("../models/ProductModel");
const { createFactory, getAllFactory, getByIdFactory, deleteByIdFactory } = 
require("../utils/crudFactory");
/******************products************************/
const createProductHandler = createFactory(ProductModel);
const getAllProductHandler = getAllFactory(ProductModel);
const getProductById = getByIdFactory(ProductModel);
const deleteProductById = deleteByIdFactory(ProductModel);

module.exports= {
    createProductHandler,
    getAllProductHandler,
    getProductById,
    deleteProductById
}