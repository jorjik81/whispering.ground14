const User = require('./User');
const Project = require('./Comment');
const BlogPost = require('./BlogPost');

// Update the User-Project relationship to include the updated User model
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Project.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Project, BlogPost };


