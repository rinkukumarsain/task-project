const { Joi } = require('express-validation');

exports.customerRegisterVal = Joi.object({
    fullname:Joi.string().allow(''),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
});
exports.customerLoginVal = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});


