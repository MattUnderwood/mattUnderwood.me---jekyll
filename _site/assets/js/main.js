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
