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
       const btnSearch = document.querySelector('button[data-type-button="search"]');
       const wrapperSearch = document.querySelector('.header__search');

       btnSearch.addEventListener("click", function() {
        wrapperSearch.classList.toggle("is-shown");
        if(wrapperSearch.classList.contains('is-shown')) {
            this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        } else {
            this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
        }
       });
    },
    mobileToggle: () => {
        const btnHamburger = document.querySelector('button[data-type-button="hamburger"]');
        const wrapperMenu = document.querySelector('.header__links');

        btnHamburger.addEventListener("click", function() {
            wrapperMenu.classList.toggle("is-shown");
            if(wrapperMenu.classList.contains('is-shown')) {
                this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
            } else {
                this.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
            }
           });
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
  