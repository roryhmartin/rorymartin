// Mobile Nav
// Grab Everything we need
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// Add Event Listeners
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// Greeting Message
// Set Up Variables
const greeting = document.getElementById("greeting");
const hours = new Date().getHours();
const welcomeTypes = ["Good Morning", "Good Afternoon", "Good Evening"];
let welcomeText = "";

// Create Message Logic
if (hours < 12) {
    welcomeText = welcomeTypes[0];
} else if (hours < 18) {
    welcomeText = welcomeTypes[1];
} else {
    welcomeText = welcomeTypes[2];
}
// Use Logic on page
greeting.innerHTML = welcomeText + ", my name is";

// Hide & Show Panels
function toggle(el) {
    const cont = el.parentNode.nextElementSibling;
    const chevronDown = el.firstElementChild;
    const chevronUp = el.lastElementChild;

    if (cont.classList.contains("block")) {
        cont.classList.replace("block", "hidden");
        chevronUp.classList.add("hidden");
        chevronDown.classList.remove("hidden");
    } else if (cont.classList.contains("hidden")) {
        cont.classList.replace("hidden", "block");
        chevronDown.classList.add("hidden");
        chevronUp.classList.remove("hidden");
    }
}
