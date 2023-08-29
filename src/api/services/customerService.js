const { customerModel } = require("../../models");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const constant = require("../../config/const_credentials");
const moment = require('moment');

exports.customerRegister = async (req, res) => {
  try {
    const { email, phone } = req.body;
    let existingUser;
    if (email) existingUser = await customerModel.findOne({ email: email });
    else existingUser = await customerModel.findOne({ phone: phone });

    if (existingUser) {
      return {
        status: false,
        message: "Email Already Exists!",
        data: []
      }
    };
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const newUser = await customerModel.create(req.body);
    if (newUser) {
      return {
        message: "Customer create successfully",
        status: true,
        data: newUser
      };
    }

  } catch (error) {
    console.log(error);
    throw error;
  }
}
exports.customerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await customerModel.findOne({ email });

    if (!user) {
        return {
          message: 'Invalid Credentials',
          status: false,
          data: [],
        };
    }
      const tokenData = {email};
      const token = jwt.sign(tokenData, process.env.SECRET_TOKEN);
      user._doc.auth_token = token;
      return {
        message: 'User Logged In',
        status: true,
        data: user,
      };
    
  } catch (err) {
    console.error(err);
    return {
      message: 'An error occurred',
      status: false,
      data: [],
    };
  }
};


exports.getCustomer = async (req, res) => {
  try {
    let user = await customerModel.findOne({_id:req.query.id});
      return {
        message: 'Get customer details',
        status: true,
        data: user,
      };
    
  } catch (err) {
    console.error(err);
    return {
      message: 'An error occurred',
      status: false,
      data: [],
    };
  }
};

exports.getAllCustomer = async (req, res) => {
  try {
    let user = await customerModel.find({});
      return {
        message: 'Get all customer',
        status: true,
        data: user,
      };
    
  } catch (err) {
    console.error(err);
    return {
      message: 'An error occurred',
      status: false,
      data: [],
    };
  }
};