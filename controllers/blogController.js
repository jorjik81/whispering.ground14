const { BlogPost } = require('../models');

// Create a new blog post
const createBlogPost = async (req, res) => {
    try {
      const { title, content } = req.body;
      const userId = req.session.userId; // Assuming you have implemented user authentication
  
      const blogPost = await BlogPost.create({
        title,
        content,
        userId,
      });
  
      res.status(201).json(blogPost);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create blog post' });
    }
  };
  
  module.exports = {
    createBlogPost,
  };
  
  
  
  // Update a blog post
  router.put('/:id', updateBlogPost);
  
  module.exports = router;

// Delete a blog post
const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlogPost = await BlogPost.destroy({
      where: {
        id,
      },
    });

    if (deletedBlogPost === 0) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog post' });
  }
};

module.exports = {
  deleteBlogPost,
};

// Update a blog post
const updateBlogPost = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;
  
      const updatedBlogPost = await BlogPost.update(
        {
          title,
          content,
        },
        {
          where: {
            id,
          },
        }
      );
  
      if (updatedBlogPost[0] === 0) {
        return res.status(404).json({ error: 'Blog post not found' });
      }
  
      res.status(200).json({ message: 'Blog post updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update blog post' });
    }
  };
  
  module.exports = {
    updateBlogPost,
  };