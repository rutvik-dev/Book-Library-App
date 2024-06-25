var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/BOOK1')

/*CREATE BOOK*/
router.post('/CreateBook',CONTROL.CreateBook);

/*GET ALL BOOK*/
router.get('/GetBooks',CONTROL.GetBooks);

/*GET SINGLE BOOK*/
router.get('/GetBook/:id',CONTROL.GetBook);

/*UPDATE ALL BOOK*/
router.patch('/UpdateBook/:id',CONTROL.UpdateBook);

/*DELETE ALL BOOK*/
router.delete('/DeleteBook/:id',CONTROL.DeleteBook);

module.exports = router;
