import * as MainNav from './lib/mainnav.js';
window.MainNav = MainNav;


mobileMOpen = document.getElementById("hamburger");
mobileMOpen.addEventListener('click', (event) => {
    sidenav = document.getElementById("sidenav").classList.toggle("show");
} )

mobileMClose = document.getElementById("close");
mobileMClose.addEventListener('click', (event) => {
    sidenav = document.getElementById("sidenav").classList.toggle("show");
})