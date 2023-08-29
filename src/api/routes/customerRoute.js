const express = require('express');
const { customerRegister,customerLogin ,getCustomer} = require('../controllers/customerController');
const router = express.Router();
let { auth } = require("../../middleware/auth")
const validate = require('../../validate');
let customerVal= require('../../validator/customerVal')
router.post('/customer-regster',validate(customerVal.customerRegisterVal), customerRegister);
router.post('/customer-login',validate(customerVal.customerLoginVal), customerLogin);
router.get('/get-customer',auth, getCustomer);

module.exports = router;