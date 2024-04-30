const ProductModel = require('../models/ProductModel');

const {
    createFactory,
    getAllFactory,
    getByIdFactory,
    updateByIdFactory,
    deleteByIdFactory
} = require('../utils/curdFactory');

const transfomedQueryHelper = (myQuery) => {
    const parseQuery = JSON.parse(myQuery);
    console.log(parseQuery);

    const queryOperators = {
        gt: '$gt',
        gte: '$gte',
        lt: '$lt',
        lte: '$lte',

        // add any other opertors that you want
    }

    for(let key in parseQuery) { // price: {lt: 60}
      
       let internalObj = parseQuery[key];

       if(typeof internalObj === "object") {
         for(let innerKey in internalObj) { // {lt: 60}

         if(queryOperators[innerKey]) {
            internalObj[`$${innerKey}`] = internalObj[innerKey]
                // {$lt:60 }
            delete internalObj[innerKey];
         }
         }
       }
    }

    return parseQuery;
}

const getProductHandler = async(req, res) => {
    try {
        const query = req.query;

        const sortParams = query.sort;
        const selectParams = query.select;
        const page = query.page || 1;
        const limit = query.limit || 3;
        const skip = (page - 1) * limit;

        const filterParams = query.filter;


        console.log(sortParams);
        console.log(selectParams);
        console.log(filterParams);

        //1. Basic filtering - > can be done in find() or findByID() methods based params

        //let queryResponsePromise = ProductModel.find({name: "Camera"});


        //2. using query params and can also mongodb operators

        //let queryResponsePromise = ProductModel.find({price: {$lt: 60}});

        // 3. purely via mongoose methods
        //let queryResponsePromise = ProductModel.find().where('price').gt(60);

        let queryResponsePromise = null;

        if(filterParams) {
            const filterObj = transfomedQueryHelper(filterParams)
            queryResponsePromise = ProductModel.find(filterObj);
        } else {
            queryResponsePromise = ProductModel.find();
        }

        

        // Sorting
        if(sortParams) {
            const [sortParam, order] = sortParams.split(" ");

            if(order === 'asc'){
                queryResponsePromise = queryResponsePromise.sort(sortParam);
            } else{
                queryResponsePromise = queryResponsePromise.sort(`-${sortParam}`);
            }
        }

        // Selecting the particular fields data from mongodb
        if(selectParams) {
            queryResponsePromise = queryResponsePromise.select(selectParams);
        }

        //pagination
        queryResponsePromise = queryResponsePromise.skip(skip).limit(limit);


        const result = await queryResponsePromise;

        res.status(200).json({
            message:"Get products successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'});
    }
}

const getTop5Products = async(req, res, next) => {
    req.query.filter = {
        stock: {$lt: 5},
        averageRating: {$gt: 4.8}
    }

    next();
}

const getProductCategories = (req, res) => {
    res.status(200).json({
        data: ["electronics","jewelery","men's clothing","women's clothing"]
    });
}

const createProduct = createFactory(ProductModel);
const getProducts = getAllFactory(ProductModel);
const getProductById = getByIdFactory(ProductModel);
const updateProduct = updateByIdFactory(ProductModel);
const deleteProduct = deleteByIdFactory(ProductModel);

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    getProductHandler,
    getTop5Products,
    updateProduct,
    deleteProduct,
    getProductCategories
}