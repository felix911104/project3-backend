var db = require('./models');

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

