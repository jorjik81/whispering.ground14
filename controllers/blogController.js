const { BlogPost } = require('../models');

const createBlogPost = async (req, res) => {
  try {
    // ... (unchanged code)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog post' });
  }
};

const updateBlogPost = async (req, res) => {
  try {
    // ... (unchanged code)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog post' });
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    // ... (unchanged code)
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
};

module.exports = {
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
