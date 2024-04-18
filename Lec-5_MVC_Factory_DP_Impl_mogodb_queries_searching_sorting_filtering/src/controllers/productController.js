const ProductModel = require('../models/productModel');

const { createFactory } = require('../utils/curdFactory');

// const createProduct = async(req, res) => {
//     try {
//         let product =  ProductModel.create(req.body);

//         if(!product) {
//             res.status(400).json({
//                 status:"failure"
//             }) 
//         }

//         res.status(200).json({
//             status:"success",
//             message: "Product has been registered successfully!"
//         })
         
//     }catch(error) {
//         res.status(500).json({message: 'Internal Server Error'});
//     }
// }

const getProducts = async(req, res) => {
    // try {
    //     const users = await UserModel.find();
    //     res.status(200).json(users);
    // } catch (error) {
    //      res.status(500).json({message: 'Internal Server Error'});
    // }
}

const getProductById = async(req, res) =>{

    //  const { id } = req.params;

    //  try {
    //     const users = await UserModel.findById(id)
    //     res.status(200).json(users);
    // } catch (error) {
    //      res.status(500).json({message: 'Internal Server Error'});
    // }
}

const updateProduct = async(req, res) =>{

    // const { id } = req.params;

    // try {

    //     const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});

    //     if(!user) {
    //         res.status(404).json({message: "user not found!"})
    //     }

    //     res.status(200).json(user);
        
    // } catch (error) {
    //     res.status(500).json({message: 'Internal Server Error'});
    // } 
    
}

const deleteProduct = async(req, res) =>{

    // const { id } = req.params;

    // try {

    //     const user = await UserModel.findByIdAndDelete(id);

    //      if(!user) {
    //         res.status(404).json({message: "user not found!"})
    //     }

    //     res.status(200).json({message: "USer has been delete successfully!"});

        
    // } catch (error) {
    //     res.status(500).json({message: 'Internal Server Error'});
    // }
    
}

const getProductHandler = async(req, res) => {
    try {

        const query = req.query;

        const sortParams = query.sort;
        //const selectParams = query.select;

        console.log(sortParams);
        //console.log(selectParams);

        let queryResponsePromise = ProductModel.find();

        if(sortParams) {
            const [sortParam, order] = sortParams.split();

            if(order === 'asc'){
                queryResponsePromise = queryResponsePromise.sort(sortParam);
            } else{
                queryResponsePromise = queryResponsePromise.sort(`-${sortParam}`);
            }
        }

        const result = await queryResponsePromise;

        res.status(200).json({
            message:"Get products successfully",
            data: result
        })

    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'});
    }
}

const createProduct = createFactory(ProductModel);

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    getProductHandler
}