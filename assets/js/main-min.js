/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
function handleMenuClick(e){e.target instanceof HTMLAnchorElement&&(toggle.checked=!1)}var prevScrollpos=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;document.getElementById("navs").style.top=e<prevScrollpos?"0":"-71px",prevScrollpos=e};
// Close hamburger dropdown menu when a menu link is clicked
var menu=document.getElementById("menu"),toggle=document.getElementById("toggle");menu.addEventListener("click",handleMenuClick);