const { User } = require('../models');
const bcrypt = require('bcrypt');

const authController = {
  signup: async (req, res) => {
    try {
      // ... (unchanged code)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  signin: async (req, res) => {
    try {
      // ... (unchanged code)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  signout: (req, res) => {
    try {
      // ... (unchanged code)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },
};

module.exports = authController;