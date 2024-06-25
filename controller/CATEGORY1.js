const Category = require('../model/CATEGORY');


// === CREATE CATEGORY  ===
let CreateCaregory = async function (req, res, next) {
    try {
        const { name } = req.body;
        const CreateCategory = await Category.create({name});

        res.status(201).json({
            status: "success",
            message: 'Create Category successfully',
            Data: CreateCategory
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// === CREATE CATEGORY  ===
let getAllCategories = async function (req, res, next) {
    try {
        const categories = await Category.find();

        res.status(201).json({
            status: "success",
            message: 'Read All Category successfully',
            Data: categories
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


module.exports = {CreateCaregory,getAllCategories}