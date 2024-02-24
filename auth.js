var jwt = require("jwt-simple");
var config = require("./config");
const User = require("./models/user")();

module.exports = async (req, res, next) => {
  if (req.headers["x-auth"]) {
    req.auth = jwt.decode(req.headers["x-auth"], config.secret);
  }
  if (req.auth && req.auth.userid) {
    const user = await User.findOne({ _id: req.auth.userid });
    if (user) {
      req.isAuthorized = user && req.auth.userid != "5ece428af848aa2fc392d099";
      req.isAdmin = user && config.admins.indexOf(req.auth.userid) >= 0;
    }
  }
  next();
};
