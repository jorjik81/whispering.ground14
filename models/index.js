const User = require('./User');
const Project = require('./Comment');
const BlogPost = require('./BlogPost');

// Update the User-Project relationship to include the updated User model
User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
});
BlogPost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
  onDelete: 'CASCADE',

});

Comment.belongsTo(Blogpost, {
  foreignKey: 'blogpost_id',
});

module.exports = { User, BlogPost, Comment };


