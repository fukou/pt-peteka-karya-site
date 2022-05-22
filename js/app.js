/*
Author: Faiz Ichsan Jaya
Last updated: 8/5/2022

*/

var app = {
    init: function () {
        app.searchToggle();
        app.mobileToggle();
        app.mobileSubmenuToggle();
        app.localizationToggle();
        app.runCounter();
        app.aosAnimation();
        app.loadTabs();
        app.dummyMaps();
        app.countDownTimer();
    },
    searchToggle: () => {
       let btnSearch = document.querySelector('button[data-type-button="search"]');
       const wrapperSearch = document.querySelector('.header__search');
       
       const isButtonExist = btnSearch;
       if(typeof(isButtonExist) != 'undefined' && isButtonExist != null) {

        btnSearch.addEventListener("click", function() {
         wrapperSearch.classList.toggle("is-shown");
         if(wrapperSearch.classList.contains('is-shown')) {
             this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
         } else {
             this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
         }
        });
       }
    },
    mobileToggle: () => {
        const btnHamburger = document.querySelector('button[data-type-button="hamburger"]');
        const wrapperMenu = document.querySelector('.header__links');

        const isButtonExist = btnHamburger;
        if(typeof(isButtonExist) != 'undefined' && isButtonExist != null) {

            btnHamburger.addEventListener("click", function() {
                wrapperMenu.classList.toggle("is-shown");
                if(wrapperMenu.classList.contains('is-shown')) {
                    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
                } else {
                    this.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
                }
            });
        }
    },
    mobileSubmenuToggle: () => {
        const submenu = document.querySelectorAll(".header ul > li.header__links__menu--item--has-submenu > a");
        submenu.forEach(function(subs, index) {
            subs.insertAdjacentHTML('beforeend', '<span class="toggle"><i class="las la-angle-down"></i></span>');

            subs.querySelector('.toggle').addEventListener("click", function(e) {
                subs.querySelector('.toggle').parentElement.parentElement.classList.toggle("is-expanded");
                subs.querySelector('.toggle').parentElement.classList.toggle("is-active");
            })
        });
    },
    localizationToggle: () => {

    },
    numberCounter: () => {
        const counters = document.querySelectorAll('.value');
        const speed = 200;

        counters.forEach( counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-number');
            const data = +counter.innerText;
            
            const time = value / speed;
            if(data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else{
                counter.innerText = value;
            }
        }
            animate();
        });
    },
    runCounter: () => {
        const isKeyExist = document.querySelector('.wrapper__key');
        if(typeof(isKeyExist) != 'undefined' && isKeyExist != null) {

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    app.numberCounter();
                  }
                });
            });
              
            observer.observe(document.querySelector('.wrapper__key'));
        }
    },
    aosAnimation: () => {
        AOS.init({
            once: true, // only animate once if `true`
        });
    },
    loadTabs: () => {
       const isTabsExist = document.querySelector("[data-tabs");
       if(typeof(isTabsExist) != 'undefined' && isTabsExist != null){
          const tabs = new Tabby("[data-tabs]");
       }
    },
    dummyMaps: () => {
        const isMapExist = document.querySelector("#map");
        if(typeof(isMapExist) != 'undefined' && isMapExist != null){
            var map = L.map('map').setView([-6.175110, 106.865036], 10);
            var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom:10,
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
                    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1
            }).addTo(map);
        }
    },
    countDownTimer: () => {
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minsEl = document.getElementById("mins");
        const secondsEl = document.getElementById("seconds");

        const newYears = "1 July 2022";

        function countdown() {
            const newYearsDate = new Date(newYears);
            const currentDate = new Date();

            const totalSeconds = (newYearsDate - currentDate) / 1000;

            const days = Math.floor(totalSeconds / 3600 / 24);
            const hours = Math.floor(totalSeconds / 3600) % 24;
            const mins = Math.floor(totalSeconds / 60) % 60;
            const seconds = Math.floor(totalSeconds) % 60;

            daysEl.innerHTML = days;
            hoursEl.innerHTML = formatTime(hours);
            minsEl.innerHTML = formatTime(mins);
            secondsEl.innerHTML = formatTime(seconds);
        }

        function formatTime(time) {
            return time < 10 ? `0${time}` : time;
        }

        // initial call
        countdown();
        setInterval(countdown, 1000);
    }
};
  
document.addEventListener("DOMContentLoaded", () => {
    app.init();
});
  