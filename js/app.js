/*
Author: Faiz Ichsan Jaya
Last updated: 30/4/2022

*/

var app = {
    init: function () {
        app.searchToggle();
        app.mobileToggle();
        app.mobileSubmenuToggle();
        app.localizationToggle();
    },
    searchToggle: () => {
       
    },
    mobileToggle: () => {

    },
    mobileSubmenuToggle: () => {
        const submenu = document.querySelectorAll(".header ul > li.header__links__menu--item--has-submenu > a");
        console.log(submenu);
        submenu.forEach(function(subs, index) {
            subs.insertAdjacentHTML('beforeend', '<span class="toggle"><i class="las la-angle-down"></i></span>');

            subs.querySelector('.toggle').addEventListener("click", function(e) {
                subs.querySelector('.toggle').parentElement.parentElement.classList.toggle("is-expanded");
                subs.querySelector('.toggle').parentElement.classList.toggle("is-active");
            })
        });
        console.log("Berhasil...");
    },
    localizationToggle: () => {

    }
};
  
document.addEventListener("DOMContentLoaded", () => {
    app.init();
});
  