const { Comment } = require('../models');

// Create a new comment
const createComment = async (req, res) => {
  try {
    const { content, blogPostId } = req.body;
    const userId = req.session.userId; // Assuming you have implemented user authentication

    const comment = await Comment.create({
      content,
      userId,
      blogPostId,
    });

    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }
};

module.exports = {
  createComment,
};

// Get comments for a specific blog post
const getCommentsByBlogPostId = async (req, res) => {
    try {
      const { blogPostId } = req.params;
  
      const comments = await Comment.findAll({
        where: {
          blogPostId,
        },
      });
  
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve comments' });
    }
  };
  
  module.exports = {
    getCommentsByBlogPostId,
  };