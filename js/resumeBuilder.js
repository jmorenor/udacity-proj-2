//Appends the custom Google map to id="mapDiv" in the document
$("#mapDiv").append(googleMap);

//Adds details about myself in the Bio object
var bio = {
    "name": "Paul Parson",
    "role": "Designer, Developer, Product Manager",
    "welcomeMessage": "I love the possibilities of beautiful design paired with elegant code found in one product!",
    "contacts": {
        "mobileNumber": "719-246-1603",
        "email": "made(at)augustcreative(dot)com",
        "github": "paulparson",
        "twitter": "@madeataugust",
        "location": "Colorado Springs"
    },
    "skills": ["HTML5", "CSS3", "JavaScript", "PHP", "Ruby on Rails", "Python", "Photoshop", "Illustrator", "Sketch", "UI/UX design", "Front-end development", "Product Management", "Lean methodology"],
    "bioPic": "images/me_2014.jpg"
};


//Un-comment the line below to add a button that will 'internationalize' bio.name
//$("#header").append(internationalizeButton);

//Declares the displayContacts(); function
var displayContacts = function(DOMLocation) {

    //Looks at the contacts object within the bio object
    //and grabs details and appends to the document
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobileNumber);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);

        $(DOMLocation).append(mobile)
                .append(email)
                .append(github)
                .append(twitter)
                .append(location);
}

//Calls the displayContact(); function
displayContacts("#footerContacts");


//Declares the displayBio(); function
var displayBio = function() {

    //Appends contact details to the document

    var myName = HTMLheaderName.replace("%data%", bio.name);
    var myRole = HTMLheaderRole.replace("%data%", bio.role);
    var myMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var myPic = HTMLbioPic.replace("%data%", bio.bioPic);

    $("#header").append(myRole)
            .prepend(myMsg)
            .append(myPic)
            .append(myName);

    //Checks if any skills in the skills array are available to display
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
          var mySkills = HTMLskills.replace("%data%", bio.skills[i]);
          $("#skills").append(mySkills);
        }
    }

    displayContacts("#contacts");
}

//Calls the displayBio(); function
displayBio();


//Adds details of my work experience in the Work object
var work = {
    "jobs": [
        {
        "employer": "David C Cook",
        "title": "Digital Product Manager",
        "location": "Colorado",
        "dates": "Aug 2010 - Present",
        "description": "Define and lead the technical vision, cross-product product strategy,  requirements, design and usability, and product roadmap  ||  Lead product development scope, requirements and execution with a team of engineers and designers  ||  Align projects to strategic organizational priorities  ||  Determine the product strategy of the markets we go after, positioning with competitive analysis and customer research, defining the product, ensuring stakeholder adoption, defining value proposition, and identifying requirements to win in those markets."
        },
        {
        "employer": "Space Foundation",
        "title": "Art Director",
        "location": "Colorado",
        "dates": "Mar 2007 - Aug 2010",
        "description": "Account Manager for highest revenue-grossing National Space Symposium in 25 years. Managed network of freelance contractors for any out-of-house projects to maintain brand cohesiveness. Lead designer and artist for the 26th National Space Symposium conference that hosted over 9000 attendees."
    },
        {
        "employer": "FreeMotion Fitness",
        "title": "Digital Designer",
        "location": "Colorado",
        "dates": "Dec 2003 - Mar 2007",
        "description": "Communicated clear, conceptual art direction to other designers. Produced powerful, large-scale banners and hanging graphics to create an energetic trade show presence. Designed extensive product catalogs and training manuals that exceeded 100 pages. Directed both on-site and off-site photo shoots of product photography for internationally distributed training programs and sales collateral. Built XHTML/CSS based pages and eNewsletters and Flash based presentations."
    }]
};

//Declares the displayWork(); function expression
var displayWork = function() {

    //Iterates through the work object and gets each job,
    //from the jobs array and gets its details
    //Appends job details to the document

    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var workTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var concat = workEmployer + workTitle;
        var workDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var workLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var workDescrip = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(concat)
            .append(workDates)
            .append(workLoc)
            .append(workDescrip);
    }
}

//Calls the displayWork(); function
displayWork();


//Adds details of my educational background in the Education object
var education = {
    "schools": [{
        "name": "University of California, San Diego",
        "location": "La Jolla, CA",
        "degree": "Bachelor of Arts",
        "majors": ["Visual Arts - Media"],
        "dates": "1998 - 2003",
        "url": "http://ucsd.edu/",
        "pic": "images/ucsd-logo.png"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2014 - 2015",
        "url": "https://www.udacity.com/course/nd001"
    },
        {
        "title": "Gamification",
        "school": "University of Pennsylvania",
        "dates": "2011",
        "url": "https://www.coursera.org/course/gamification"
    }]
};

//Declares the displayEdu(); function expression
var displayEdu = function() {

    //Iterates through the education object and gets each school,
    //and iterates through each school(s) details
    //Appends school details to the document

    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var concat = schoolName + schoolDegree;
        var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var schoolURLText = HTMLschoolURLText.replace("%data%",education.schools[school].url);
        var schoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
        var schoolConcat = schoolURL + schoolURLText;
        var schoolPic = HTMLschoolPic.replace("%data%", education.schools[school].pic)

        $(".education-entry:last").append(concat)
            .append(schoolLocation)
            .append(schoolDates)
            .append(schoolMajor)
            .append(schoolConcat)
            .prepend(schoolPic);
    }

    //Adds h3 for online courses
    $(".online-entry:last").append(HTMLonlineClasses);

    //Iterates through the education object and gets each online school
    //and iterates through each online school(s) details
    //Appends online school details to the document

    for (course in education.onlineCourses) {

        $("#education").append(HTMLonlineStart);

        var courseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var courseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var courseConcat = courseTitle + courseSchool;
        var courseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var courseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        var courseURLText = HTMLonlineURLText.replace("%data%", education.onlineCourses[course].url);
        var courseURLConcat = courseURL + courseURLText;

        $(".online-entry:last").append(courseConcat)
            .append(courseDates)
            .append(courseURLConcat);
    }
}

//Calls the displayEdu(); function
displayEdu();


//Adds details of projects i've worked on in the Projects array
var projects = [{
    "title": "Seacoast Community Church",
    "dates": "Mar 2014",
    "description": "A redesigned and rebuilt website for a Southern California church.",
    "picURL": "images/seacoast.jpg"
},
    {
    "title": "Leadership Design Group",
    "dates": "Jan 2014",
    "description": "New brand identity and website for a professional mentoring organization.",
    "picURL": "images/leadershipdesigngroup.jpg"
},
    {
    "title": "WeAdopt",
    "dates": "May 2013",
    "description": "A logo and visual design concept for a crowd-funding adoption startup",
    "picURL": "images/weadopt.jpg"
}];

//Declare the display(); function expression using dot notation
projects.display = function () {

    //Iterates through the projects array
    //and appends project details to the document

    for (var i = 0; i < projects.length; i++) {

        $("#projects").append(HTMLprojectStart);

        var projTitle = HTMLprojectTitle.replace("%data%", projects[i].title);
        var projDates = HTMLprojectDates.replace("%data%", projects[i].dates);
        var projDesc = HTMLprojectDescription.replace("%data%", projects[i].description);
        var projPic = HTMLprojectImage.replace("%data%", projects[i].picURL);

        $(".project-entry:last").append(projTitle)
                .append(projDates)
                .append(projDesc)
                .append(projPic);
    }
}

//Calls the display(); function
projects.display();