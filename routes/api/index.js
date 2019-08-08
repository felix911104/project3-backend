//creating user table with name and password
var db = require("../../models")
const axios = require("axios");

module.exports = function (app) {


  app.get("/api/users", function (req, res) {
    db.User.findAll({})
      .then(function (result) {
        res.json(result)
      })
  });

  app.get("/api/food", function (req, res) {
    axios.get("https://data.seattle.gov/resource/hmzu-x5ed.json").
      then(result => {
        res.json({ "data": result.data })
      })
  });

  app.post("/api/fooddatabase", function (req, res) {
    db.Food.create(req.body.foodData).then(function (food) {
   res.send('data added');
    })
  });

  app.get("/api/foodindatabase/:location", function(req,res){
    // console.log(req.body.data)
    db.Food.findOne({where:{location:req.params.location}}).then(function(food){
      res.json(food)
    })
  });

  app.post("/api/foodtouser", function (req, res) {
    db.Food.findOne({where:{location:req.body.foodData.location}}).then(function (food) {
      // console.log(req.body.userId)
      db.User.findOne({where:{id:req.body.userId}}).then(function(user){
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
    db.User.findOne({where:{id:req.params.id}}).then(function(user){
user.getFood({}).then(food=>{
  res.json(food)
})
})
      // fetchMe(req, res) {
      //   const username = req.decoded.data;
      //   return 
        // db.User
        // .find({
        //   include: [{
        //     model: models.Food,
        //     as: 'food',
        //     required: false,
        //     attributes: ['day_time', 'meal_served'],
        //     through: { attributes: [] }
        //   }],
        //   where: { id:req.params.id }
        // })
  });
  //   user.findOne({where:{name:req.body.name}}).then(dbUser=>{
  //     let loggedIn = bcrypt.compareSync(req.body.password,dbUser.password);
  //     if(loggedIn) {
  //         req.session.user = dbUser
  //     }
  //     else {
  //         req.session.error = 'auth failed bro'
  //     }
  //     res.send(req.session);




  // })


  app.post('/api/users', function (req, res) {
    console.log(req.body);
    // res.json(req.body);
    db.User.create(req.body)
      .then(user => res.json(user))
  });


}