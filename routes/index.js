var AccountHandler = require('./account');

module.exports = exports = function(app, db) {
  var account = new AccountHandler(db);

  app.get("/", account.show);
}
