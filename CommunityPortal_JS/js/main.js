console.log("Welcome to the Community Portal");

window.onload = () => {

    alert("Page Fully Loaded");
};

/* =========================
   DATA TYPES
========================= */

const eventName = "Music Festival";

const eventDate = "2026-12-20";

let seats = 50;

console.log(
`${eventName}
${eventDate}
Seats:${seats}`
);

/* =========================
   CLASS
========================= */

class Event {

    constructor(
        name,
        category,
        date,
        seats
    ){

        this.name = name;
        this.category = category;
        this.date = date;
        this.seats = seats;
    }

}

Event.prototype.checkAvailability =
function(){

    return this.seats > 0;
};

/* =========================
   EVENTS ARRAY
========================= */

let events = [

    new Event(
        "Music Festival",
        "Music",
        "2026-12-20",
        50
    ),

    new Event(
        "Baking Workshop",
        "Workshop",
        "2026-11-10",
        20
    ),

    new Event(
        "Sports Day",
        "Sports",
        "2026-10-05",
        0
    )
];

/* =========================
   PUSH
========================= */

events.push(

    new Event(
        "Dance Show",
        "Music",
        "2026-09-15",
        30
    )

);

/* =========================
   MAP
========================= */

let cards = events.map(

e => `Workshop on ${e.name}`

);

console.log(cards);

/* =========================
   FILTER
========================= */

let musicEvents =

events.filter(

e => e.category === "Music"

);

console.log(musicEvents);

/* =========================
   OBJECT ENTRIES
========================= */

Object.entries(events[0])

.forEach(

([key,value]) =>

console.log(key,value)

);

/* =========================
   CLOSURE
========================= */

function registrationTracker(){

    let count = 0;

    return function(){

        count++;

        return count;
    };
}

const trackMusic =
registrationTracker();

/* =========================
   FUNCTIONS
========================= */

function addEvent(event){

    events.push(event);
}

function registerUser(event){

    try{

        if(event.seats <= 0){

            throw new Error(
            "No Seats Available"
            );
        }

        event.seats--;

        console.log(
        "Registered Successfully"
        );

    }

    catch(error){

        console.log(error.message);
    }
}

function filterEventsByCategory(
category,
callback
){

    let result =

    events.filter(

    e => e.category === category

    );

    callback(result);
}

/* =========================
   DOM
========================= */

const container =

document.querySelector(
"#eventContainer"
);

function displayEvents(data){

    container.innerHTML = "";

    data.forEach(event => {

        if(
            event.seats > 0
        ){

            let card =

            document.createElement(
            "div"
            );

            card.className =
            "eventCard";

            card.innerHTML =

            `
            <h3>${event.name}</h3>

            <p>${event.category}</p>

            <p>Seats:
            ${event.seats}</p>

            <button onclick=
            "handleRegister('${event.name}')">

            Register

            </button>
            `;

            container.appendChild(
            card
            );
        }

    });
}

displayEvents(events);

/* =========================
   REGISTER
========================= */

function handleRegister(name){

    let event =

    events.find(

    e => e.name === name

    );

    registerUser(event);

    displayEvents(events);

    console.log(
    "Total Registrations:",
    trackMusic()
    );
}

/* =========================
   ONCHANGE
========================= */

document

.getElementById(
"categoryFilter"
)

.onchange = function(){

    let category =
    this.value;

    if(category === "All"){

        displayEvents(events);

    }

    else{

        filterEventsByCategory(

        category,

        result =>

        displayEvents(result)

        );
    }
};

/* =========================
   KEYDOWN
========================= */

document

.getElementById(
"searchBox"
)

.addEventListener(

"keydown",

function(){

    let keyword =

    this.value.toLowerCase();

    let filtered =

    events.filter(

    e =>

    e.name
    .toLowerCase()

    .includes(keyword)

    );

    displayEvents(filtered);

}

);

/* =========================
   FORM
========================= */

document

.getElementById(
"registrationForm"
)

.addEventListener(

"submit",

function(event){

    event.preventDefault();

    console.log(
    "Form Submitted"
    );

    let form =
    event.target;

    let name =
    form.elements["name"].value;

    let email =
    form.elements["email"].value;

    let selected =
    form.elements["event"].value;

    let valid = true;

    if(name === ""){

        document
        .getElementById(
        "nameError"
        )
        .innerHTML =
        "Name Required";

        valid = false;
    }

    else{

        document
        .getElementById(
        "nameError"
        )
        .innerHTML = "";
    }

    if(email === ""){

        document
        .getElementById(
        "emailError"
        )
        .innerHTML =
        "Email Required";

        valid = false;
    }

    else{

        document
        .getElementById(
        "emailError"
        )
        .innerHTML = "";
    }

    if(valid){

        sendRegistration({

            name,

            email,

            selected

        });
    }

}

);

/* =========================
   FETCH POST
========================= */

function sendRegistration(
user
){

    document
    .getElementById(
    "message"
    )
    .innerHTML =
    "Sending...";

    setTimeout(() => {

        fetch(

        "https://jsonplaceholder.typicode.com/posts",

        {

            method:"POST",

            headers:{

            "Content-Type":
            "application/json"

            },

            body:
            JSON.stringify(user)

        })

        .then(

        response =>

        response.json()

        )

        .then(data => {

            document
            .getElementById(
            "message"
            )
            .innerHTML =
            "Registration Successful";

            console.log(data);

        })

        .catch(error => {

            document
            .getElementById(
            "message"
            )
            .innerHTML =
            "Registration Failed";

            console.log(error);

        });

    },2000);
}

/* =========================
   ASYNC AWAIT
========================= */

async function loadEvents(){

    try{

        let response =

        await fetch(
        "data/events.json"
        );

        let data =

        await response.json();

        console.log(
        data
        );

    }

    catch(error){

        console.log(error);
    }
}

loadEvents();

/* =========================
   DESTRUCTURING
========================= */

const {

name,

category

}

= events[0];

console.log(
name,
category
);

/* =========================
   SPREAD
========================= */

const clonedEvents =

[...events];

console.log(
clonedEvents
);

/* =========================
   JQUERY
========================= */

$("#registerBtn")

.click(function(){

    $(".eventCard")
    .fadeOut(500)
    .fadeIn(500);
});

console.log(
"React/Vue Benefit: Better Component Reuse"
);