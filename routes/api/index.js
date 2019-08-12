//creating user table with name and password
var db = require("../../models")
const bcrypt = require('bcrypt');
const axios = require("axios");

module.exports = function (app) {

  app.delete("/api/deletefood/:userid/:foodid",function(req,res){
    console.log("hit hereeee")
    db.User.findOne({ where: { id: req.params.userid } }).then(function (user) {
      user.removeFood(req.params.foodid).then(food => {
        res.json(food);
      });
    });
  });

  app.get("/api/userbyname/:name", function (req, res) {
    db.User.findOne({where:{name:req.params.name}})
      .then(function (result) {
        res.json(result);
      });
  });

  app.get("/api/food", function (req, res) {
    axios.get("https://data.seattle.gov/resource/hmzu-x5ed.json").
      then(result => {
        res.json({ "data": result.data });
      });
  });

  app.post("/api/fooddatabase", function (req, res) {
    db.Food.create(req.body.foodData).then(function (food) {
      res.send('data added');
    });
  });

  app.get("/api/foodindatabase/:location", function (req, res) {
    // console.log(req.body.data)
    db.Food.findOne({ where: { location: req.params.location } }).then(function (food) {
      res.json(food)
    })
  });

  app.post("/api/foodtouser", function (req, res) {
    db.Food.findOne({ where: { location: req.body.foodData.location } }).then(function (food) {
      // console.log(req.body.userId)
      db.User.findOne({ where: { id: req.body.userId } }).then(function (user) {
        // console.log('adding foodz')
        console.log("food to user")
        user.addFood(food);
        res.send('data added');
      })
    })
  });

  app.get("/api/food", function (req, res) {
    axios.get("https://data.seattle.gov/resource/hmzu-x5ed.json").
      then(result => {
        res.json({ "data": result.data })
      })
  })


  app.get("/api/userfood/:id", function (req, res) {
    // db.FoodUsers.findAll({where:{userId:req.params.id}})
    //   .then(function (result) {
      //     res.json(result)
      //   })
      db.User.findOne({ where: { id: req.params.id } }).then(function (user) {
        user.getFood({}).then(food => {
          res.json(food)
        })
      })
    })
    //grab clinic database
    app.get("/api/clinic", function(req, res) {
      db.Clinic.findAll({}).then(result => {
        res.send(result);
      })
    })

  //login for existing user
  app.get("/api/users/:name/:password", function (req, res) {

    // console.log(req.params.password);
    // console.log(req.params.name);
    //find user in db
    db.User.findOne({ where: { name: req.params.name } }).then(dbUser => {
     
  
      //comparing hashed password
      let loggedIn = bcrypt.compareSync(req.params.password, dbUser.password);
      if (loggedIn) {

        res.send({ "success": true })
      }
      else {
        res.send({ "success": "Invalid Password" })
      }
    }).catch((error) => {
      //console.log(error);
      res.send({ "success": false })
    });
  });

  //sign up for new user
  app.post('/api/users', function (req, res) {
    console.log(req.body)
    //find or create new user
    db.User.findOrCreate({ where: { name: req.body.name }, defaults: { password: req.body.password } }).then(([user, created]) => {
      console.log(user.get({
        plain: true
      }))
      console.log(created)
      if(!created) {
        res.send({"success": false})
      }
      else {
        res.send({ "success": true })
      }
    }).catch((error) => {
      console.log(error)
    });
  });


  app.get("/api/shelters", function (req, res) {
    db.Shelter.findAll().
      then(result => {
        res.json(result);
      });
  });

   app.get("/api/sheltersindatabase/:location", function (req, res) {
    // console.log(req.body.data)
    db.Shelter.findOne({ where: { location: req.params.location } }).then(function (shelter) {
      res.json(shelter)
    })
  });

  app.post("/api/Shelterstouser", function (req, res) {
    db.Shelter.findOne({ where: { Location: req.body.shelterData.Location } }).then(function (shelter) {
      // console.log(req.body.userId)
      db.User.findOne({ where: { id: req.body.userId } }).then(function (user) {
        // console.log('adding foodz')
        console.log("food to user")
        user.addShelter(shelter);
        res.send('data added');
      })
    })
  });

  

}