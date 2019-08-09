var db = require('./models');

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



