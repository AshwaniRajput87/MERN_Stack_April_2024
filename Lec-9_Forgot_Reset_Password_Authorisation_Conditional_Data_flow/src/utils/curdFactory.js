// factory functions that will take Model as input and return the same async function that defined earlier.

const createFactory = (Model) => {
    return async(req, res, next) => {
        try {
            const elementModel = await Model.create(req.body);

            if(!elementModel) {
                res.status(404).json({message: 'Data not found'});
            }

            res.status(201).json({
                message: 'Data created successfully',
                data: elementModel
            });
        } catch(error) {
        //res.status(500).json({message: error.message});
        next(error);
        }
    }
}

const getAllFactory = (Model) => {
    return async (req, res, next) => {
        try {
            const elementModel = await Model.find();
            if(!elementModel.length) {
                res.status(404).json({message: 'Data not found'});
                //throw new Error('Product not found');
            }
            res.status(200).json({
                data: elementModel
            });
        } catch (error) {
            //res.status(500).json({message: error.message}); 
            next(error);
        }
    }
}

const getByIdFactory = (Model) => {
    return async (req, res, next) => {
        const { id } = req.params;
        try {
            const elementModel = await Model.findById(id);
            if(!elementModel) {
                //res.status(404).json({message: 'Data not found'});
                const err = new Error("Data not found");
                err.statusCode = 404;

                throw err; // Throw will trigger the catch block
            }

            res.status(200).json({
                data: elementModel
            });
        } catch (error) {
           // res.status(500).json({message: error.message}); 

            next(error);
        }
    }
}


/**
 *  Required when we want to handle custom validation and show the custom error message.
 *  next(): If object keys are not empty then the control will pass to the next middleware in the stack.
 * 
 */
const checkInput = (req, res, next) => {
    const input = req.body;

    console.log(input);

    const isEmpty = Object.keys(input).length === 0;

    if(isEmpty) {
        return res.status(400).json({
            message: "Input fields cannot be empty"
        })
    } else {
        next();
    }
}

const updateByIdFactory = (Model) => {
    // Assignment: to complete the logic
    return;
}

const deleteByIdFactory = (Model) => {
    // Assignment: to complete the logic
    return;
}

module.exports = {
    createFactory,
    getAllFactory,
    getByIdFactory,
    checkInput,
    updateByIdFactory,
    deleteByIdFactory
}
