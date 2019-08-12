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