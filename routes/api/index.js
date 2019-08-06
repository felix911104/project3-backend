//creating user table with name and password
var db = require("../../models")
const axios = require("axios");

module.exports = function(app) {

    app.get("/api/users", function(req, res) {
      db.User.findAll({})
      .then(function(result) {
        res.json(result)
      })
    })

    app.get("/api/food", function(req, res) {
  axios.get("https://data.seattle.gov/resource/hmzu-x5ed.json").
  then(result=>{
 
    
    res.json({"data":result.data})
    
  })
})
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