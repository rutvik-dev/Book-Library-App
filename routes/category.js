var express = require('express');
var router = express.Router();
let CONTROL = require('../controller/CATEGORY1')

/*CREATE CATEGORY*/
router.post('/CreateCaregory',CONTROL.CreateCaregory);

/*GET ALL CATEGORY*/
router.get('/getAllCategories',CONTROL.getAllCategories);


module.exports = router;
