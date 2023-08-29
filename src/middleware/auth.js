const jwt = require("jsonwebtoken");
const  customerModel  = require('../models/customerModel');
const constant = require('../config/const_credentials');
const config = process.env;

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
        console.log('decoded-->',decoded);
        let data = await customerModel.findOne(decoded); 
        if(data.status=="blocked")
        {
            return res.status(401).json(Object.assign({ success: false }, {
                status: false,
                msg: 'User is blocked'
            }));    
        }
       
        if (!decoded) {
            throw new Error()
        }
        req.user = data;
        next();

    } catch (e) {
        token = {
            status: false,
            msg: 'Invalid Token'
        }
        return res.status(401).json(Object.assign({ success: false }, token));
    }
}

const authenticateRole =  (role) => {
  return async (req, res, next) => {
    try {
      // Check if user is authenticated
      if (!req.user) {
        return res.status(401).json({ message: 'Authentication required' });
      }
      const user = await customerModel.findById(req.user._id);
      // Check if the user has the required role
      if (!user || user.role !== role) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      // User is authenticated and has the required role
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
};

module.exports = {
    auth,
    authenticateRole,
};