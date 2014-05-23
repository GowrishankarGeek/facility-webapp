var AccountHandler = require('./account');

module.exports = exports = function(app, db) {
  var accountHandler = new AccountHandler(db);

  app.get("/", accountHandler.show);
}
