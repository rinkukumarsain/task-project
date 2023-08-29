const { addCategory , getAllCategory, addPost,getAllPost} = require('../services/categoryService');

exports.addCategory = async (req, res, next) => {
    try {
        const data = await addCategory(req);
        if (data.status === false) {
            return res.status(200).json(Object.assign(data));
        } else {
            return res.status(200).json(Object.assign(data));
        }
    } catch (error) {
        next(error);
    }
}

exports.getAllCategory = async (req, res, next) => {
    try {
        const data = await getAllCategory(req);
        if (data.status === false) {
            return res.status(200).json(Object.assign(data));
        } else {
            return res.status(200).json(Object.assign(data));
        }
    } catch (error) {
        next(error);
    }
}

exports.addPost = async (req, res, next) => {
    try {
        const data = await addPost(req);
        if (data.status === false) {
            return res.status(200).json(Object.assign(data));
        } else {
            return res.status(200).json(Object.assign(data));
        }
    } catch (error) {
        next(error);
    }
}

exports.getAllPost = async (req, res, next) => {
    try {
        const data = await getAllPost(req);
        if (data.status === false) {
            return res.status(200).json(Object.assign(data));
        } else {
            return res.status(200).json(Object.assign(data));
        }
    } catch (error) {
        next(error);
    }
}