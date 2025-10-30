/* Js for SP song Part */

var audio = document.getElementById('audioButton');
var image = document.getElementById('my-rotatingImageID');

if (audio) {
    audio.addEventListener('play', function() {
        image.classList.add('rotating');
    });
    
    audio.addEventListener('pause', function() {
        image.classList.remove('rotating');
    });
    
    audio.addEventListener('ended', function() {
        image.classList.remove('rotating');
    });
}



/* dancing music notes */

var audio = document.getElementById('audioButton');
var musicNote1 = document.getElementById('my-dancingNote1');
var musicNote2 = document.getElementById('my-dancingNote2');

if (audio) {
    audio.addEventListener('play', function() {
        musicNote1.classList.add('dancing');
        musicNote2.classList.add('dancing');
    });
    
    audio.addEventListener('pause', function() {
        musicNote1.classList.remove('dancing');
        musicNote2.classList.remove('dancing');
    });
    
    audio.addEventListener('ended', function() {
        musicNote1.classList.remove('dancing');
        musicNote2.classList.remove('dancing');
    });
}




/* SP Timeline */

const milestones = [
    { year: '1956', description: 'Mr D J Williams appointed first Principal'},
    { year: '1958', description: 'Completion of Prince Edward Road campus with an enrolment of 2,800 students registered for 58 courses to prepare them for external examinations'},
    { year: '1959', description: 'Official opening of Singapore Polytechnic at Prince Edward Road by Prince Philip, the Duke of Edinburgh on 24 February 1959. Mr C I C Scollay appointed Principal'},
    { year: '1960', description: 'The Malay phrase, Berkhidmat Dengan Keahlian means To Serve With Skill. It is the Polytechnic’s educational mission.'},
    { year: '1961', description: 'The first Graduation Ceremony on 26 August 1961 was held at Victoria Theatre.'},
    { year: '1963', description: 'Mr A R Edis appointed Principal'},
    { year: '1967', description: 'First batch of degree graduates produced'},
    { year: '1969', description: 'Polytechnic restructured into School of Industrial Technology and School of Nautical Studies'},
    { year: '1971', description: 'Present campus site at Dover Road chosen as permanent home of the Polytechnic'},
    { year: '1973', description: 'Mr V P W Ager appointed Principal'},
    { year: '1974', description: 'Construction of Dover Road campus began'},
    { year: '1978', description: 'Dover Road campus completed'},
    { year: '1979', description: 'Dover Road campus officially opened by Prime Minister Lee Kuan Yew on 7 July. The ceremony was held at the Quadrangle between the Admin Building and the Library.'},
    { year: '1994', description: 'SP became the first poly to introduce the Diploma in Optometry.'},
    { year: '1996', description: 'Mr Low Wong Fook took over as new Principal'},
    { year: '2008', description: 'Mr Tan Hang Cheong took over as the new Principal at the start of 2008.'},
    { year: '2013', description: 'Mr Tan Choon Shian took over as the new Principal at the start of 2013.'},
    { year: '2014', description: 'SP celebrates its 60th anniversary.'},
    { year: '2015', description: 'SP reaches a key milestone with graduation of close to 5,900 students.'},
    { year: '2016', description: 'Mr Soh Wai Wah took over as the new Principal and CEO in October 2016.'},
    { year: '2018', description: 'SP achieved our 200,000th graduate milestone!'},
    { year: '2023', description: 'SP launched first decarbonisation playbook, paving the way for Institute of Higher Learning. Launch of the SP’s 70th anniversary commemorative book “For All Ages, Singapore Polytechnic At Seventy.”'},
    { year: '2024', description: 'SP celebrates its 70th anniversary!'}
    
];

const milestonesList = document.getElementById('milestonesList');

if (milestonesList) {
    for (let i = 0; i < milestones.length; i++) {
        const milestoneRow = document.createElement('tr');
        milestoneRow.innerHTML = `<td class="col-md-3">${milestones[i].year}</td><td class="col-md-9">${milestones[i].description}</td>`;
        milestonesList.appendChild(milestoneRow);
    }
}


/* SP Food courts */

/* a function that helps to reduce to type document.getElementById() */

function getId(obj) {
    return document.getElementById(obj);
}

foodCourts = getId("fc1");

if (foodCourts) {
    getId("fc1").onclick = fc1;
    function fc1() {
        getId("my-content-active-fc1").style.display = "block";
        getId("my-content-fc2").style.display = "none";
        getId("my-content-fc3").style.display = "none";
        getId("my-content-fc4").style.display = "none";
        getId("my-content-fc5").style.display = "none";
        getId("my-content-fc6").style.display = "none";

        getId("fc1").style.background = "#6f2c2c";
        getId("fc2").style.background = "#f54b4b";
        getId("fc3").style.background = "#f54b4b";
        getId("fc4").style.background = "#f54b4b";
        getId("fc5").style.background = "#f54b4b";
        getId("fc6").style.background = "#f54b4b";
    
    }

    getId("fc2").onclick = fc2;
    function fc2() {
        getId("my-content-active-fc1").style.display = "none";
        getId("my-content-fc2").style.display = "block";
        getId("my-content-fc3").style.display = "none";
        getId("my-content-fc4").style.display = "none";
        getId("my-content-fc5").style.display = "none";
        getId("my-content-fc6").style.display = "none";

        getId("fc1").style.background = "#f54b4b";
        getId("fc2").style.background = "#6f2c2c";
        getId("fc3").style.background = "#f54b4b";
        getId("fc4").style.background = "#f54b4b";
        getId("fc5").style.background = "#f54b4b";
        getId("fc6").style.background = "#f54b4b";
    
    }

    getId("fc3").onclick = fc3;
    function fc3() {
        getId("my-content-active-fc1").style.display = "none";
        getId("my-content-fc2").style.display = "none";
        getId("my-content-fc3").style.display = "block";
        getId("my-content-fc4").style.display = "none";
        getId("my-content-fc5").style.display = "none";
        getId("my-content-fc6").style.display = "none";

        getId("fc1").style.background = "#f54b4b";
        getId("fc2").style.background = "#f54b4b";
        getId("fc3").style.background = "#6f2c2c";
        getId("fc4").style.background = "#f54b4b";
        getId("fc5").style.background = "#f54b4b";
        getId("fc6").style.background = "#f54b4b";
    
    }

    getId("fc4").onclick = fc4;
    function fc4() {
        getId("my-content-active-fc1").style.display = "none";
        getId("my-content-fc2").style.display = "none";
        getId("my-content-fc3").style.display = "none";
        getId("my-content-fc4").style.display = "block";
        getId("my-content-fc5").style.display = "none";
        getId("my-content-fc6").style.display = "none";

        getId("fc1").style.background = "#f54b4b";
        getId("fc2").style.background = "#f54b4b";
        getId("fc3").style.background = "#f54b4b";
        getId("fc4").style.background = "#6f2c2c";
        getId("fc5").style.background = "#f54b4b";
        getId("fc6").style.background = "#f54b4b";
    
    }

    getId("fc5").onclick = fc5;
    function fc5() {
        getId("my-content-active-fc1").style.display = "none";
        getId("my-content-fc2").style.display = "none";
        getId("my-content-fc3").style.display = "none";
        getId("my-content-fc4").style.display = "none";
        getId("my-content-fc5").style.display = "block";
        getId("my-content-fc6").style.display = "none";

        getId("fc1").style.background = "#f54b4b";
        getId("fc2").style.background = "#f54b4b";
        getId("fc3").style.background = "#f54b4b";
        getId("fc4").style.background = "#f54b4b";
        getId("fc5").style.background = "#6f2c2c";
        getId("fc6").style.background = "#f54b4b";
    
    }

    getId("fc6").onclick = fc6;
    function fc6() {
        getId("my-content-active-fc1").style.display = "none";
        getId("my-content-fc2").style.display = "none";
        getId("my-content-fc3").style.display = "none";
        getId("my-content-fc4").style.display = "none";
        getId("my-content-fc5").style.display = "none";
        getId("my-content-fc6").style.display = "block";

        getId("fc1").style.background = "#f54b4b";
        getId("fc2").style.background = "#f54b4b";
        getId("fc3").style.background = "#f54b4b";
        getId("fc4").style.background = "#f54b4b";
        getId("fc5").style.background = "#f54b4b";
        getId("fc6").style.background = "#6f2c2c";
    }
}



/* SP Milestone / Timeline */
const events = [
    {
        title: "HR Learning Fest 2024",
        date: "August 02 2024",
        time: "09:30 AM - 04:30 PM",
        location: "Singapore Polytechnic Convention Centre",
        text: "Heart of Business – How HR Weaves Skills and People Together",
        link: "https://www.sp.edu.sg/industry/events/Detail/hr-learning-fest-2024"
    },

    {
        title: "Packaging Partnership Programme x Packaging Council of Singapore Conference 2024",
        date: "August 23 2024",
        time: "10:00 AM - 04:00 PM",
        location: "Singapore Polytechnic Convention Centre",
        text: "Towards a Sustainable Packaging Future: Understand, Collaborate, Innovate",
        link: "https://www.sp.edu.sg/industry/events/Detail/packaging-partnership-programme-x-packaging-council-of-singapore-conference-2024"
    },

    {
        title: "SP @ BEX Asia 2024",
        date: "September 04 2024",
        time: "10:00 AM - 04:00 PM",
        location: "Marina Bay Sands Expo &amp; Convention Centre",
        text: "Clink the following link",
        link: "https://www.sp.edu.sg/industry/events/Detail/sp---bex-asia-2024"
    },

    {
        title: "SP @ ITAP 2024",
        date: "October 14 2024",
        time: "10:00 AM - 04:00 PM",
        location: "Singapore Expo",
        text: "Clink the following link",
        link: "https://www.sp.edu.sg/industry/events/Detail/sp---itap-2024"
    },

    {
        title: "RINC 2024",
        date: "October 17 2024",
        time: "09:00 AM - 05:00 PM",
        location: "Singapore Polytechnic Convention Centre",
        text: "Clink the following link",
        link: "https://www.sp.edu.sg/industry/events/Detail/rinc-2024"
    },

    {
        title: "SP @ SWITCH 2024",
        date: "October 28 2024",
        time: "10:00 AM - 06:00 PM",
        location: "Marina Bay Sands Expo &amp; Convention Centre",
        text: "Clink the following link",
        link: "https://www.sp.edu.sg/industry/events/Detail/sp---switch-2024"
    }
    
];


/* Events */

const cardContainer = document.getElementById('card-container');

if (cardContainer) {
    for (let i=0; i < events.length; i++) {
        const event = events[i];
    
        const cardCol = document.createElement('div');
        cardCol.className = 'col-md-4 mb-4';
    
        const card = document.createElement('div');
        card.className = 'card';
        
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body my-cardBodyEvent';
    
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title my-cardTitleEvent';
        cardTitle.textContent = event.title;
    
        const cardDate = document.createElement('h6');
        cardDate.className = "card";
        cardDate.textContent = `${event.date}, ${event.time}`;
    
        const cardLocation = document.createElement('p');
        cardLocation.className = 'card-location mb-2'
        cardLocation.textContent= event.location;
    
        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = event.text;
    
        const cardLink = document.createElement('a');
        cardLink.className = 'card-link my-cardLinkEvent';
        cardLink.href = event.link;
        cardLink.textContent = 'Learn More';
    
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardDate);
        cardBody.appendChild(cardLocation);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardLink);
        card.appendChild(cardBody);
        cardCol.appendChild(card);
        cardContainer.appendChild(cardCol);
    
    }
}



/* Wishes */
// Function to show or hide extra information based on the status selected

function extraInformation() {
    var status = getId("status").value;
    var alumni = getId("alumni");
    var student = getId("student");

    if (status === "alumni") {
        alert("Hello Alumni, thank you for remembering SP.");
        alumni.classList.remove("d-none");
        student.classList.add("d-none");
    }
    else if (status === "student") {
        alert("As a current SP student, you will receive CCA points for sending wishes to SP on its 70th anniversary.");
        student.classList.remove("d-none");
        alumni.classList.add("d-none");
    }
    else {
        alumni.classList.add("d-none");
        student.classList.add("d-none");
    }
}

function formValidation() {
    var name = getId("name").value;
    var email = getId("email").value;
    var status = getId("status").value;
    var gradYear = getId("gradYear").value;
    var ichat = getId("ichatEmail").value;
    var addmissionNo = getId("addmissionNo").value;
    var school = getId("school").value;
    var wish = getId("wish").value;
    var termsChecked = getId("terms").checked; 
    var isSuccessfull = true;

    /* Create array and check whether user check or not */
    var yearRadio = document.getElementsByName("optradio");
    var yearSelected = Array.from(yearRadio).some(radio => radio.checked);

    var gender = document.getElementsByName("gender");
    var genderSelected = Array.from(gender).some(select => select.checked);

    if (name == "" || email == "" || status == "" || wish == "" || !genderSelected) {
        alert("Please fill all fields");
        isSuccessfull = false; 
    }
    else if (status === "student") {
        if (ichat == "" || school == "" || !yearSelected) {
            alert("Dear student, please fill all fields in order to award the CCA point.");
            isSuccessfull = false;
        }

        if (!(addmissionNo.length === 7 && !isNaN(addmissionNo) && addmissionNo != '0000000' && addmissionNo > 1000000)) {
            alert("Invalid Admission Number!");
            isSuccessfull = false;
        } 
        
    }
    else if (status === "alumni") {
        if (gradYear == "") {
            alert("Please let us know your graduation year.");
            isSuccessfull = false;
        }
        else if (gradYear < 1954 || gradYear > 2024) {
            alert("Invalid graduation year!");
            isSuccessfull = false;
        }
    }
    
    if (!termsChecked) {
        alert("Must agree to the terms and condition!");
        isSuccessfull = false;
    }

    if (isSuccessfull) {
        getId("wishForm").reset();
        alert("Form sumbitted successfully.");
        getId("wishes").classList.add("d-none");
        getId("wishSubmitted").classList.remove("d-none");
    }
}

var wishForm = getId("wishForm");

if (wishForm) {
    getId("status").addEventListener("change", extraInformation);
    getId("submit").addEventListener("click", formValidation);
}
