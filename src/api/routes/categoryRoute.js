const express = require('express');
const { getAllCategory ,addCategory, addPost, getAllPost} = require('../controllers/categoryController');
const router = express.Router();
let { auth,authenticateRole } = require("../../middleware/auth")
router.post('/add-category',auth,authenticateRole('admin'), addCategory);
router.get('/all-category',auth,authenticateRole('admin'), getAllCategory);
router.post('/add-post',auth,authenticateRole('admin'), addPost);
router.get('/all-posts',auth,authenticateRole('admin'), getAllPost);

module.exports = router;