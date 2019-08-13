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

  
  app.post("/api/clinictouser", function (req, res) {
    db.Clinic.findOne({ where: { Location: req.body.clinicData.Location } }).then(function (clinic) {
  console.log(clinic)
      db.User.findOne({ where: { id: req.body.userId } }).then(function (user) {
 
        user.addClinic(clinic);
        res.send('data added');
      })
    })
  });

  app.get("/api/userclinic/:id", function (req, res) {
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
  //seed heroku database
    app.get("/api/seed", function(req, res) {
      db.Clinic.create({
        Name: "Downtown Public Health Center",
        Location: "2124 4th Ave Seattle, WA 98121",
        DaysOfOperation: "Monday - Friday 8:00 am - 5:00 pm",
        PhoneNumber: "206-477-8300",
        ClientsServed: "All age groups",
        Services: "Adult health care clinic, opioid treatment with suboxone and buprenorphine, child health care clinic, children with special needs, dental clinic, maternity screening and support services, pregnancy testing, pharmacy, prenatal care, needle exchange.",
        Notes: "Lots of services, please go to link below to learn more",
        Link: "https://www.kingcounty.gov/depts/health/locations/downtown.aspx"
    })
    
    db.Clinic.create({
        Name: "RotaCare Free Clinic",
        Location: "12726 33rd Ave NE Seattle, WA 98125",
        DaysOfOperation: "Saturdays 10:00am - 1:00pm",
        PhoneNumber: "N/A",
        ClientsServed: "All age groups",
        Services: "medical care",
        Notes: "It is recommended to get to the clinic by 9:30 to sign in - registration is on a first come, first serve basis. Walk-in only. We are located on the 2nd floor above our partner, the North Helpline Food Bank.",
        Link: "https://rotacareclinic.wordpress.com/"
    });
    
    db.Clinic.create({
        Name: "Puget Sound Christian Clinic",
        Location: "8914 Aurora Avenue N Seattle, WA 98103",
        DaysOfOperation: "Wednesday 11:00 am – 2:00 pm",
        PhoneNumber: "206-363-4105 ext. 230",
        ClientsServed: "All age groups",
        Services: "Full medical exams,resources to obtain low to no cost prescription drugs, laboratory tests, imaging services, intensive nursing case management and referrals to medical specialists, individualized diabetic education, physical therapy, ophthalmology, cardiology and chiropractic care.",
        Notes: "Walk-in only, Located at Aurora Commons",
        Link: "https://pschristianclinic.org/services"
    });
    
    db.Clinic.create({
        Name: "Puget Sound Christian Clinic",
        Location: "2152 N 122nd Street Seattle, WA 98133",
        DaysOfOperation: "Monday 4:00 pm – 8:00 pm, Wednesday 5:00 pm. – 9:00 pm, Friday 9:00 am – 1:00 pm",
        PhoneNumber: "206-363-4105 ext. 230",
        ClientsServed: "All age groups",
        Services: "Full medical exams,resources to obtain low to no cost prescription drugs, laboratory tests, imaging services, intensive nursing case management and referrals to medical specialists, individualized diabetic education, physical therapy, ophthalmology, cardiology and chiropractic care.",
        Notes: "Walk-in and by-appointment, Located inside North Seattle Church",
        Link: "https://pschristianclinic.org/services"
    });
    
    db.Clinic.create({
        Name: "Meridian Center for Health - Public Health Clinic/Neighborcare Clinic",
        Location: "10521 Meridian Ave N 2nd Floor Seattle WA 98133",
        DaysOfOperation: "Public Health Clinic: Monday, Wednesday, Friday 8:00 am - 5:00 pm Tuesday, Thursday 8:00 am - 6:30 pm || Neighborcare Clinic: Monday, Tuesday 8:00 am - 5:00 pm Wednesday 9:00 am - 5:00 pm Thursday 8:00 am - 7:00 pm Friday 8:00 am - 4:00 pm",
        PhoneNumber: "Public Health Clinic: 206-263-9440 || Neighborcare Clinic: 206-296-4990",
        ClientsServed: "All age groups",
        Services: "Adult health care clinic, child health care clinic, behavioral health services, HIV screening, maternity services, substance abuse, WIC program info",
        Notes: "",
        Link: "https://www.kingcounty.gov/depts/health/locations/north.aspx"
    });
    
    db.Clinic.create({
        Name: "North Seattle Dental Clinic",
        Location: "12359 Lake City Way NE Seattle, WA 98125",
        DaysOfOperation: "Monday - Friday 8 am to 5 pm",
        PhoneNumber: "206-205-8580",
        ClientsServed: "Children ages 1 through 18 years old, Low income pregnant women,Homeless teens and adults (ages 13 and up), Parents of child patients if Medicaid eligible, Low income adults 19+ if Medicaid eligible",
        Services: "dental services",
        Notes:"",
        Link: "https://www.kingcounty.gov/depts/health/locations/north/dental-clinic.aspx"
    });
    db.Clinic.create({
        Name: "Neighborcare Health 45th Street MEDICAL",
        Location: "1629 North 45th Street Seattle, WA 98103",
        DaysOfOperation: "Monday, Tuesday 8:00 am - 7:00 pm Wednesday varies, Thursday, Friday 8:00 am - 5:30 pm Saturday 9:00 am - 3:00 pm",
        PhoneNumber: "206-633-3113",
        ClientsServed: "Low-income, homeless, all ages",
        Services: "Preventive Care, Illnesses & Injuries, Ongoing Conditions, Well-child Care, Pediatrics, Family Planning, Family Medicine, Pregnancy Care, Newborn Care, Vaccinations, Nutrition, Counseling, STI/HIV, CareLab, Referrals, Pharmacy, Trans",
        Notes:"Please schedule an appointment ahead of time and arrive 15 minutes early",
        Link: "https://neighborcare.org/clinics/45th-street/"
    });
    db.Clinic.create({
        Name: "Neighborcare Health 45th Street DENTAL CLINIC",
        Location: "1629 North 45th Street Seattle, WA 98103",
        DaysOfOperation: "Monday - Tuesday 7:00 am - 5:30 pm Saturday 9:00 am - 2:00 pm",
        PhoneNumber: "206-548-2964",
        ClientsServed: "Low-income, homeless, all ages",
        Services: "Cleanings, Fillings, X-rays, Specialty Dental Care, Specialist Referrals, Emergency Dental Care",
        Notes:"",
        Link: "https://neighborcare.org/clinics/45th-street/"
    });
    db.Clinic.create({
        Name: "Neighborcare Health 45th Street PHARMACY",
        Location: "1629 North 45th Street Seattle, WA 98103",
        DaysOfOperation: "Monday - Friday 9:00 am - 5:30 pm",
        PhoneNumber: "206-633-3365",
        ClientsServed: "Low-income, homeless, all ages",
        Services: "Medication fills",
        Notes:"",
        Link: "https://neighborcare.org/clinics/45th-street/"
    });
    db.Shelter.create({
      Name: "Roots Young Adults Shelter",
      Location: "1415 NE 43rd Street Seattle, WA",
      DaysOfOperation: "All days of the week",
      PhoneNumber: "206-632-1635",
      ClientsServed: " Young adults ages 18 - 25",
      Services: "Safe overnight emergency shelter, Clean bedding, Dinner and breakfast, Showers, Clothing, Toiletries, On-site case management (Monday – Thursday) and referral to other support and transitional services, Supportive and nurturing relationships between staff, volunteers, and guests",
      Notes: "The shelter is located in the basement of the University Temple United Methodist Church. The entrance is in the alley at the southwest corner of the building.  PLEASE CALL NUMBER ABOVE OR COME TO DOOR TO SIGN UP.",
      Link: "https://www.kingcounty.gov/depts/health/locations/downtown.aspx"
  })
  
  db.Shelter.create({
      Name: "Sacred Heart Shelter",
      Location: "100 23rd Avenue S Seattle, WA",
      DaysOfOperation: "All days of the week",
      PhoneNumber: "206-285-7489",
      ClientsServed: "All age groups",
      Services: "Safe overnight shelter, Clean Bedding",
      Notes: "",
      Link: "https://ccsww.org/get-help/shelter-homeless-services/sacred-heart-shelter/"
  });
  
  db.Shelter.create({
      Name: "Mary's Place",
      Location: "Many locations throughout Seattle, Check link to website below",
      DaysOfOperation: "All days of the week",
      PhoneNumber: "206-245-1026",
      ClientsServed: "All age groups",
      Services: "Muliple shelters throught Seattle for women, children, and families, womens day center, community resources, and many more programs to help with babies, employment, and housing.",
      Notes: "Please call phone number above to get more information about services or visit link",
      Link: "https://www.marysplaceseattle.org/"
  });
  
  db.Shelter.create({
      Name: "Seattle's Union Gosple Mission: Mens Shelter",
      Location: "318 2nd Ave Ext S, Seattle, WA 98104",
      DaysOfOperation: "All days of the week",
      PhoneNumber: "206-622-5177",
      ClientsServed: "Adult men",
      Services: "Meals, Shelter, programs to assist in employment.",
      Notes: "Visit link or call to get more information",
      Link: "https://www.ugm.org/what-we-do/welcome-and-embrace/mens-shelter/"
  });
  
  db.Shelter.create({
      Name: "Bread of Life. The Mission in Pioneer Square",
      Location: "97 S. MAIN STREET, SEATTLE, WA 98104",
      DaysOfOperation: "All days of the week",
      PhoneNumber: "206-682-3579",
      ClientsServed: "Day Shelter Open to All, Night Shelter Available for Adult Men",
      Services: "Lockers, showers and bus tickets, help with clothing needs and a quiet place to relax and rest.",
      Notes: "Visit link or call to get more information",
      Link: "https://www.breadoflifemission.org/"
  });
  
  db.Shelter.create({
      Name: "Angeline's Day Center",
      Location: "2030 3rd Avenue Seattle, WA 98121",
      DaysOfOperation: "All days of the week. 8AM - 8PM.",
      PhoneNumber: "206.436.8650",
      ClientsServed: "Adult Women. Overnight winter shelter is open to single adult women 18 and older.",
      Services: "Transitional Housing, Rental/Utility Assistance, Permanent Housing, Emergency Shelter, Homeless Services, Childcare",
      Notes: "Visit link or call to get more information",
      Link: "https://www.ywcaworks.org/programs/angelines-day-center"
  });
  
  db.Shelter.create({
      Name: "Noel House Women's Referral Center",
      Location: "2030 3rd Ave Seattle, WA 98101",
      DaysOfOperation: "All days of the week. 6:00 – 9:00 p.m.",
      PhoneNumber: "(206) 441-3210",
      ClientsServed: "Women",
      Services: "The Women's Referral Center refers 180 women nightly to 15 shelters in partnership with multiple service agencies. Evening meals and hygiene services are also available.",
      Notes: "Visit link or call to get more information",
      Link: "https://ccsww.org/get-help/shelter-homeless-services/noel-house-programs/"
  });
  
  db.Shelter.create({
      Name: "Catholic Community Services - Solanus Casey Center",
      Location: "906 Columbia Street Seattle, WA 98104",
      DaysOfOperation: "Monday through Thursday, from 1:00 p.m. to 4:00 p.m.",
      PhoneNumber: "206-223-0907",
      ClientsServed: "All Age Groups",
      Services: "Walk-in hospitality and referral center that provides services to the unemployed, working poor, those living on the street, shelters, and transitional housing.",
      Notes: "Visit link or call to get more information",
      Link: "http://ccsww.convio.net"
  });
  
  db.Shelter.create({
      Name: "Family and Adult Service Center - Adult Center",
      Location: "77 S Washington St. Seattle, WA 98104",
      DaysOfOperation: "Monday through Thursday, from 1:00 p.m. to 4:00 p.m.",
      PhoneNumber: "(206) 474-1000",
      ClientsServed: "All Age Groups",
      Services: "Showers - Food - Laundry facilties - Telephones - Mail services - Clothing ",
      Notes: "Visit link or call to get more information",
      Link: "http://www.compasshousingalliance.org"
  });
    })

}