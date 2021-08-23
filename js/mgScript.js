const routeOne = document.getElementById("routeOne");
const routeTwo = document.getElementById("routeTwo");

const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");

buttonOne.addEventListener("click", function() { toggle(routeOne); });
buttonTwo.addEventListener("click", function() { toggle(routeTwo); });

function toggle(e) {
	e.style.display = (e.style.display === "none") ? "block" : "none" ;
}