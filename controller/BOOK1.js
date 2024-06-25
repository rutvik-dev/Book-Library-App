const Book = require('../model/BOOK');

// ===== CREATE BOOK ===== 
let CreateBook = async function (req, res, next) {
    try {
        const { title, author, category, publishedDate } = req.body;
        const CreateBook = await Book.create({title, author, category, publishedDate });

        res.status(201).json({
            status: "success",
            message: 'Create Book successfully',
            Data: CreateBook
        });
    } catch (error) {
        res.status(404).json({
            status: "fail", 
            message: error.message
        });
    }
}

// ===== READ BOOKS ===== 
let GetBooks = async function (req, res, next) {
    try {
        const books = await Book.find().populate('category');

        res.status(201).json({
            status: "success",
            message: 'Read Book successfully',
            Data: books
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// ===== READ BOOK ===== 
let GetBook = async function (req, res, next) {
    try {
       id = req.params.id
        const book = await Book.findById(id).populate('category');

        res.status(201).json({
            status: "success",
            message: 'Read Book successfully',
            Data: book
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}

// ===== UPDATE BOOK ===== 
let UpdateBook = async function (req, res, next) {
    try {
        id = req.params.id
        const Updatebook = await Book.findByIdAndUpdate(id,req.body,{new:true}).populate('category');

        res.status(201).json({
            status: "success",
            message: 'Update Book successfully',
            Data: Updatebook
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}


// ===== DELETE BOOK ===== 
let DeleteBook = async function (req, res, next) {
    try {
        id = req.params.id
        const DeleteBook = await Book.findByIdAndDelete(id);

        res.status(201).json({
            status: "success",
            message: 'Delete Book successfully',
            Data: DeleteBook
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message
        });
    }
}



module.exports = {CreateBook,GetBooks,GetBook,UpdateBook,DeleteBook}