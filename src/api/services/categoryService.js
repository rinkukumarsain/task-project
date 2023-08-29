const { categoryModel, postModel} = require("../../models");
const mongoose = require('mongoose');
exports.addCategory = async (req, res) => {
    try {
      const { name } = req.body;
      let existingCat = await categoryModel.findOne({ name });
      if (existingCat) {
        return {
          status: false,
          message: "This category already exists!",
          data: []
        }
      };
      const newCategory = await categoryModel.create(req.body);
      if (newCategory) {
        return {
          message: "Category create successfully",
          status: true,
          data: newCategory
        };
      }
  
    } catch (error) {
      console.log(error);
      throw error;
    }
}
  exports.getAllCategory = async (req, res) => {
    try {
      let category = await categoryModel.find({});
        return {
          message: 'Get all customer',
          status: true,
          data: category,
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


exports.addPost = async (req, res) => {
    try {
      const { name } = req.body;
      let existingPost = await postModel.findOne({ name });
      if (existingPost) {
        return {
          status: false,
          message: "This post already exists!",
          data: []
        }
      };
      req.body.createdBy= req.user._id;
      const newPost = await postModel.create(req.body);
      if (newPost) {
        return {
          message: "Post create successfully",
          status: true,
          data: newPost
        };
      }
  
    } catch (error) {
      console.log(error);
      throw error;
    }
}

exports.getAllPost = async (req, res) => {
    try {
        const { category, name, page, limit } = req.query;
        const query = {};
      
        if (category) query.category = new mongoose.Types.ObjectId(category);
        if (name) query.name = { $regex: name, $options: 'i' };
      
        const pageNumber = parseInt(page) || 1;
        const itemsPerPage = parseInt(limit) || 10;
        const skip = (pageNumber - 1) * itemsPerPage;
        // console.log();
        let agePipe=[];
        if(Object.keys(query).length>0){
            agePipe.push({
                $match:query
            });
        }
        agePipe.push({
            $lookup:{
                from: "categories",
                localField: "category",
                foreignField: "_id",
                as: "category"
            }
        });
        agePipe.push({
            $unwind:{
                path: "$category",
            }
        });
        agePipe.push({
            $addFields:{
                category:"$category.name"
            }
        });

        agePipe.push({
            $skip:skip
        });

        agePipe.push({
            $limit:itemsPerPage
        });
        const posts = await postModel.aggregate(agePipe);
        return {
            message: 'Get all post',
            status: true,
            data: posts
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