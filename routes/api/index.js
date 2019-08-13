//creating user table with name and password
var db = require("../../models")
const bcrypt = require('bcrypt');
const axios = require("axios");

module.exports = function (app) {

  //delete saved food
  app.delete("/api/deletefood/:userid/:foodid",function(req,res){
    db.User.findOne({ where: { id: req.params.userid } }).then(function (user) {
      user.removeFood(req.params.foodid).then(food => {
        res.json(food);
      });
    });
  });

//
  app.get("/api/userbyname/:name", function (req, res) {
    db.User.findOne({where:{name:req.params.name}})
      .then(function (result) {
        res.json(result);
      });
  });
//call to city of seattle api
  app.get("/api/food", function (req, res) {
    axios.get("https://data.seattle.gov/resource/hmzu-x5ed.json").
      then(result => {
        res.json({ "data": result.data });
      });
  });
//saving food to database table
  app.post("/api/fooddatabase", function (req, res) {
    db.Food.create(req.body.foodData).then(function (food) {
      res.send('data added');
    });
  });
//check if food exists in database
  app.get("/api/foodindatabase/:location", function (req, res) {
    // console.log(req.body.data)
    db.Food.findOne({ where: { location: req.params.location } }).then(function (food) {
      res.json(food)
    })
  });
//saving user preferences to databse
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

 
  //login for existing user
  app.get("/api/users/:name/:password", function (req, res) {

    // console.log(req.params.password);
    // console.log(req.params.name);
    //find user in db
    db.User.findOne({ where: { name: req.params.name } }).then(dbUser => {
     
  
      //comparing hashed password
      let loggedIn = bcrypt.compareSync(req.params.password, dbUser.password);
      
        res.send({ "success": loggedIn })
    
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


  //finding all clinics
  app.get("/api/clinics", function(req, res) {
    db.Clinic.findAll({}).then(result => {
      res.json(result);
    })
  });

  
  app.post("/api/Clinicstouser", function (req, res) {
    db.Clinic.findOne({ where: { Location: req.body.clinicData.Location } }).then(function (clinic) {
  console.log(clinic)
      db.User.findOne({ where: { id: req.body.userId } }).then(function (user) {
 
        user.addClinic(clinic);
        res.send('data added');
      })
    })
  });

  app.get("/api/userClinics/:id", function (req, res) {
    // db.FoodUsers.findAll({where:{userId:req.params.id}})
    //   .then(function (result) {
      //     res.json(result)
      //   })
      db.User.findOne({ where: { id: req.params.id } }).then(function (user) {
        user.getClinic({}).then(clinics => {
          res.json(clinics);
        });
      });
    });

    app.delete("/api/deleteClinic/:userid/:clinicid",function(req,res){
      console.log("hit hereeee")
      db.User.findOne({ where: { id: req.params.userid } }).then(function (user) {
        user.removeClinic(req.params.clinicid).then(clinic => {
          res.json(clinic);
        });
      });
    });


  app.get("/api/shelters", function (req, res) {
    db.Shelter.findAll().
      then(result => {
        res.json(result);
      });
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

  app.get("/api/userShelters/:id", function (req, res) {
    // db.FoodUsers.findAll({where:{userId:req.params.id}})
    //   .then(function (result) {
      //     res.json(result)
      //   })
      db.User.findOne({ where: { id: req.params.id } }).then(function (user) {
        user.getShelter({}).then(shelters => {
          res.json(shelters);
        });
      });
    });

    app.delete("/api/deleteShelter/:userid/:shelterid",function(req,res){
      console.log("hit hereeee")
      db.User.findOne({ where: { id: req.params.userid } }).then(function (user) {
        user.removeShelter(req.params.shelterid).then(shelter => {
          res.json(shelter);
        });
      });
    });
  

}