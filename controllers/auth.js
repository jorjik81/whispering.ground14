const { User } = require('../models');
const bcrypt = require('bcrypt');

const authController = {
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Check if the username already exists
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user
      const newUser = await User.create({ username, password: hashedPassword });

      // Set user session
      req.session.user = {
        id: newUser.id,
        username: newUser.username,
      };

      res.status(201).json({ message: 'User created', user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  signin: async (req, res) => {
    try {
      const { username, password } = req.body;

      // Find the user by username
      const user = await User.findOne({ where: { username } });

      // Check if user exists and if the password is correct
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }

      // Set user session
      req.session.user = {
        id: user.id,
        username: user.username,
      };

      res.status(200).json({ message: 'User authenticated', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  signout: (req, res) => {
    try {
      // Clear user session
      req.session.destroy();

      res.status(200).json({ message: 'User signed out' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },
};

module.exports = authController;