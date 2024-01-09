const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const seeduserData = require('./userData');
const seedblogpostData = require('./blogpostData');
const seedcommentData = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
