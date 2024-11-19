const session = require("express-session");
// Middleware to check if user is logged in
function isAuthenticated(req, res, next) {
  if (!req.session.user_id) {
    return res.status(401).json({ message: "first login please" });
  }
  return next();
}

module.exports = isAuthenticated;
