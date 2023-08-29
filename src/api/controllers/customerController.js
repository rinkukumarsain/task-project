const { customerRegister,customerLogin, getAllCustomer,getCustomer } = require('../services/customerService');

exports.customerRegister = async (req, res, next) => {
    try {
        const data = await customerRegister(req);
        if (data.status === false) {
            return res.status(200).json(Object.assign({ success: false }, data));
        } else {
            return res.status(200).json(Object.assign({ success: true }, data));
        }
    } catch (error) {
        next(error);
    }
}

exports.customerLogin = async (req, res, next) => {
    try {
        const data = await customerLogin(req);
        if (data.status === false) {
            return res.status(200).json(Object.assign({ success: false }, data));
        } else {
            return res.status(200).json(Object.assign({ success: true }, data));
        }
    } catch (error) {
        next(error);
    }
}
exports.getAllCustomer = async (req, res, next) => {
    try {
        const data = await getAllCustomer(req);
        if (data.status === false) {
            return res.status(200).json(Object.assign({ success: false }, data));
        } else {
            return res.status(200).json(Object.assign({ success: true }, data));
        }
    } catch (error) {
        next(error);
    }
}

exports.getCustomer = async (req, res, next) => {
    try {
        const data = await getCustomer(req);
        if (data.status === false) {
            return res.status(200).json(Object.assign({ success: false }, data));
        } else {
            return res.status(200).json(Object.assign({ success: true }, data));
        }
    } catch (error) {
        next(error);
    }
}