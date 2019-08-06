//creating user table with name and password
var db = require("../../models")
const bcrypt = require('bcrypt');

module.exports = function (app) {
app.get("/", function(req, res) {
  db.User.findAll({}).then(result => {
    res.send(result)
  })
})

  //login
  app.get("/api/users/:name/:password", function (req, res) {

    console.log(req.params.password);
    console.log(req.params.name);
    db.User.findOne({ where: { name: req.params.name } }).then(dbUser => {
      console.log(dbUser);
      let loggedIn = bcrypt.compareSync(req.params.password, dbUser.password);
      if (loggedIn) {

        res.send({ "success": "Welcome" })
      }
      else {
        res.send({ "success": "Invalid Password" })
      }
    }).catch((error) => {
      //console.log(error);
      res.send({ "err": "Please Signup!" })
    });
  });

  //sign up
  app.post('/api/users', function (req, res) {
    console.log(req.body)
    db.User.findOrCreate({ where: {name: req.body.name}, defaults: {password: req.body.password} }).then(([user, created]) => {
       console.log(user.get({
       plain: true
      }))
       console.log(created)
     }).catch((error) => {
        console.log(error)
     });
    res.send({ "success": "Welcome to our app!" })
  });
}