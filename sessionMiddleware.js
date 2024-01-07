const sessionMiddleware = (req, res, next) => {
    const sessionTimeout = 30 * 60 * 1000; // 30 minutes in milliseconds
    if (req.session && req.session.lastActivity) {
      const currentTime = Date.now();
      const idleTime = currentTime - req.session.lastActivity;
      if (idleTime > sessionTimeout) {
        req.session.destroy(); // Destroy the session or clear session data as needed
        return res.redirect('/login'); // Redirect the user to the login page
      }
    }
    next();
  };
  
  module.exports = sessionMiddleware;