var UserDAO = require('./user');

function AccountHandler(db) {
  var users = new UserDAO(db);
  var currentUser = "kia";

  this.show = function(req, res) {
    users.findUser(currentUser, function(err, user) {
      if (err) throw err;
      res.render("index", user);
    });
  }
}

module.exports = AccountHandler;
