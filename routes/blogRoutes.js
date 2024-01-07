const express = require('express');
const router = express.Router();
const { createBlogPost } = require('./controllers/blogController');

// Create a new blog post
router.post('/', createBlogPost);

module.exports = router;