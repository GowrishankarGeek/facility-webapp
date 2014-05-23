function UserDAO(db) {
  var users = db.collection("users");

  this.findUser = function(username, callback) {
    users.findOne({name: username}, function(err, user) {
      if (err) callback(err, null);

      callback(null, user);
    });
  }
}

module.exports = UserDAO;
