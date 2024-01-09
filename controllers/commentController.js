const { Comment } = require('../models');

const createComment = async (req, res) => {
  try {
    // ... (unchanged code)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }
};

const getCommentsByBlogPostId = async (req, res) => {
  try {
    // ... (unchanged code)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve comments' });
  }
};

module.exports = {
  createComment,
  getCommentsByBlogPostId,
};
