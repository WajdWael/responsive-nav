
// set varibles
let menu = document.querySelector('.links');
let btnBars = document.querySelector('.nav-toggle');

btnBars.addEventListener('click', function () {
    if (!menu.classList.contains("show-links")) {
        menu.classList.add("show-links");
    } else if (menu.classList.contains("show-links")) {
        menu.classList.remove("show-links");
    } 
    // menu.classList.toggle("show-links");
})


let tiems = document.querySelector('.close-btn');
let sideBars = document.querySelector('.slider');
let project = document.getElementById("proj");
let section = document.querySelector(".sc-7");

project.addEventListener('click', () => {
    sideBars.classList.toggle("show-sidebar");
})
tiems.addEventListener('click',  () => {
    sideBars.classList.toggle("show-sidebar");
})

window.addEventListener('click', (e) => {
    if (e.target === sideBars) {
        sideBars.style.transform= "translate(0)";
    }
});

