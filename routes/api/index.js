//creating user table with name and password
var db = require("../../models")
const bcrypt = require('bcrypt');
const axios = require("axios");

module.exports = function (app) {



    app.get("/api/food", function(req, res) {
  axios.get("https://data.seattle.gov/resource/hmzu-x5ed.json").
  then(result=>{
 
    
    res.json({"data":result.data})
    
  })
})
 

//route to get all users in db
// app.get("/", function(req, res) {
//   db.User.findAll({}).then(result => {
//     res.send(result)
//   })
// })

  //login for existing user
  app.get("/api/users/:name/:password", function (req, res) {

    console.log(req.params.password);
    console.log(req.params.name);
    //find user in db
    db.User.findOne({ where: { name: req.params.name } }).then(dbUser => {
      console.log(dbUser);
      //comparing hashed password
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

  //sign up for new user
  app.post('/api/users', function (req, res) {
    console.log(req.body)
    //find or create new user
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