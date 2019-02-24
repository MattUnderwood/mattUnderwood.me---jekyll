/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navs").style.top = "0";
    } else {
        document.getElementById("navs").style.top = "-74px";
    }
    prevScrollpos = currentScrollPos;
};

// Close hamburger dropdown menu when a menu link is clicked
var menu = document.getElementById('menu');
var toggle = document.getElementById("toggle");

menu.addEventListener('click', handleMenuClick);

function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement) {
        toggle.checked = false;
    }
}


// Shows/Hides form & the contact button when 'Contact Me' button is clicked
function toggleForm() {
    let element = document.getElementById("contact-form");
    let contactButton = document.getElementById("contact-button");
    if (element.classList.contains('hide')) {
        element.classList.remove('hide');
        contactButton.classList.add('hide');
    } else {
        element.classList.add('hide');
    }
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDfDHdiygPgTq7eoNK6eVMY65cKzN4VyYA",
    authDomain: "contactform-ea125.firebaseapp.com",
    databaseURL: "https://contactform-ea125.firebaseio.com",
    projectId: "contactform-ea125",
    storageBucket: "contactform-ea125.appspot.com",
    messagingSenderId: "75787007843"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, message);

    // Hide Form
    document.querySelector('.form').style.display = 'none';

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    // setTimeout(function(){
    //     document.querySelector('.alert').style.display = 'none';
    // }, 3000);
}

// Function to get form valies
function getInputVal(id){
    return document.getElementById(id).value;
}

// Function to save message to firebase
function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}

