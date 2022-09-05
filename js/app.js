/*
Author: Faiz Ichsan Jaya
Last updated: 8/5/2022

*/

var app = {
    init: function () {
        app.headerScroll();
        app.searchToggle();
        app.mobileToggle();
        app.mobileSubmenuToggle();
        app.localizationToggle();
        app.runCounter();
        app.aosAnimation();
        app.loadTabs();
        app.dummyMaps();
        app.countDownTimer();
        app.tinySlider();
        app.chatBox();
    },
    headerScroll: () => {
        let scrollpos = window.scrollY;
        const header = document.querySelector(".header");
        const header_height = header.offsetHeight;
 
        const add_class_on_scroll = () => header.classList.add("fade-in");
        const remove_class_on_scroll = () => header.classList.remove("fade-in");
 
        window.addEventListener("scroll", function () {
         scrollpos = window.scrollY;
 
         if (scrollpos >= header_height) {
             add_class_on_scroll();
         } else {
             remove_class_on_scroll();
         }
       });
    },
    searchToggle: () => {
       let btnSearch = document.querySelectorAll('button[data-type-button="search"]');
       const wrapperSearch = document.querySelector('.header__search');
       
       const isButtonExist = btnSearch;
       if(typeof(isButtonExist) != 'undefined' && isButtonExist != null) {

        for (const b of btnSearch) {
            b.addEventListener("click", function() {
                wrapperSearch.classList.toggle("is-shown");
                this.classList.toggle("is-changed");
                this.closest("header").classList.toggle("is-changed");
                if(wrapperSearch.classList.contains('is-shown')) {
                    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
                } else {
                    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`;
                }
            });
        }
       }
    },
    mobileToggle: () => {
        const btnHamburger = document.querySelector('button[data-type-button="hamburger"]');
        const wrapperMenu = document.querySelector('.header__links');

        const isButtonExist = btnHamburger;
        if(typeof(isButtonExist) != 'undefined' && isButtonExist != null) {

            btnHamburger.addEventListener("click", function() {
                wrapperMenu.classList.toggle("is-shown");
                this.closest("header").classList.toggle("is-changed");
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
            subs.insertAdjacentHTML('afterend', '<button class="toggle"><i class="las la-angle-down"></i></button>');

            console.log( subs.nextElementSibling.nextElementSibling);
            subs.nextElementSibling.addEventListener("click", function() {
                subs.nextElementSibling.classList.toggle("is-active");
                subs.parentElement.classList.toggle("is-expanded");
            })
        });
    },
    localizationToggle: () => {
       let btnLang = document.querySelector('button[data-type-button="language"]');
       const listLanguage = document.querySelector('button[data-type-button="language"] > .language');
       
       const isButtonExist = btnLang;
       if(typeof(isButtonExist) != 'undefined' && isButtonExist != null) {

        btnLang.addEventListener("click", function() {
         listLanguage.classList.toggle("is-shown");
        });
       }
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
        const isCountdownExist = document.querySelector('.countdown-container');
        if(typeof(isCountdownExist) != 'undefined' && isCountdownExist != null) {
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
    },
    tinySlider: () => {
        var container = '.slideshow';
        if(typeof(container) != 'undefined' && container != null) {
            document.querySelectorAll(container).forEach(slider => {
                console.log(slider);
                var slider1 = slider;
                var sliderMode = slider1.getAttribute('data-mode') ? slider1.getAttribute('data-mode') : 'carousel';
                var sliderAxis = slider1.getAttribute('data-axis') ? slider1.getAttribute('data-axis') : 'horizontal';
                var sliderSpace = slider1.getAttribute('data-gutter') ? slider1.getAttribute('data-gutter') : 30;
                var sliderEdge = slider1.getAttribute('data-edge') ? slider1.getAttribute('data-edge') : 0;

                var sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 4; //option: number (items in all device)
                var sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItems); //option: number (items in 1200 to end )
                var sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsXl); //option: number (items in 992 to 1199 )
                var sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsLg); //option: number (items in 768 to 991 )
                var sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsMd); //option: number (items in 576 to 767 )
                var sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : Number(sliderItemsSm); //option: number (items in start to 575 )

                var sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
                var sliderautoWidth = slider1.getAttribute('data-autowidth') === 'true'; //option: true or false
                var sliderArrow = slider1.getAttribute('data-arrow') !== 'false'; //option: true or false
                var sliderDots = slider1.getAttribute('data-dots') !== 'false'; //option: true or false

                var sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false'; //option: true or false
                var sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 4000;
                var sliderHoverPause = slider1.getAttribute('data-hoverpause') === 'true'; //option: true or false
                var sliderLoop = slider1.getAttribute('data-loop') !== 'false'; //option: true or false
                var sliderRewind = slider1.getAttribute('data-rewind') === 'true'; //option: true or false
                var sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true'; //option: true or false
                var sliderfixedWidth = slider1.getAttribute('data-fixedwidth') === 'true'; //option: true or false
                var sliderTouch = slider1.getAttribute('data-touch') !== 'false'; //option: true or false
                var sliderDrag = slider1.getAttribute('data-drag') !== 'false'; //option: true or false
                // Check if document DIR is RTL
                var ifRtl = document.getElementsByTagName("html")[0].getAttribute("dir");
                var sliderDirection;
                if (ifRtl === 'rtl') {
                    sliderDirection = 'rtl';
                }
                var tnsSlider = tns({
                    container: slider,
                    mode: sliderMode,
                    axis: sliderAxis,
                    gutter: sliderSpace,
                    edgePadding: sliderEdge,
                    speed: sliderSpeed,
                    autoWidth: sliderautoWidth,
                    controls: sliderArrow,
                    nav: sliderDots,
                    autoplay: sliderAutoPlay,
                    autoplayTimeout: sliderAutoPlayTime,
                    autoplayHoverPause: sliderHoverPause,
                    autoplayButton: false,
                    autoplayButtonOutput: false,
                    controlsPosition: top,
                    navPosition: top,
                    autoplayPosition: top,
                    controlsText: [
                        '<i class="las la-angle-left"></i>',
                        '<i class="las la-angle-right"></i>'
                    ],
                    loop: sliderLoop,
                    rewind: sliderRewind,
                    autoHeight: sliderAutoHeight,
                    fixedWidth: sliderfixedWidth,
                    touch: sliderTouch,
                    mouseDrag: sliderDrag,
                    arrowKeys: true,
                    items: sliderItems,
                    textDirection: sliderDirection,
                    responsive: {
                        0: {
                            items: Number(sliderItemsXs)
                        },
                        576: {
                            items: Number(sliderItemsSm)
                        },
                        768: {
                            items: Number(sliderItemsMd)
                        },
                        992: {
                            items: Number(sliderItemsLg)
                        },
                        1200: {
                            items: Number(sliderItemsXl)
                        }
                    }
                });
            });
        }
    },
    chatBox: () => {
        const isChatboxExist = document.querySelector('.chatbox');
        if(typeof(isChatboxExist) != 'undefined' && isChatboxExist != null) {
            const toggleChatboxBtn = document.querySelector(".js-chatbox-toggle");
            const chatbox = document.querySelector(".js-chatbox");
            const chatboxMsgDisplay = document.querySelector(".js-chatbox-display");
            const chatboxForm = document.querySelector(".js-chatbox-form");

            // Use to create chat bubble when user submits text
            // Appends to display
            const createChatBubble = input => {
                const chatSection = document.createElement("p");
                chatSection.textContent = input;
                chatSection.classList.add("chatbox__display-chat");

                chatboxMsgDisplay.appendChild(chatSection);
            };

            // Toggle the visibility of the chatbox element when clicked
            // And change the icon depending on visibility
            toggleChatboxBtn.addEventListener("click", () => {
            chatbox.classList.toggle("chatbox--is-visible");

                if (chatbox.classList.contains("chatbox--is-visible")) {
                    toggleChatboxBtn.innerHTML = '<i class="las la-angle-down"></i>';
                } else {
                    toggleChatboxBtn.innerHTML = '<i class="las la-angle-up"></i>';
                }
            });

            // Form input using method createChatBubble
            // To append any user message to display
            // chatboxForm.addEventListener("submit", e => {
            //     const chatInput = document.querySelector(".js-chatbox-input").value;

            //     createChatBubble(chatInput);

            //     e.preventDefault();
            //     chatboxForm.reset();
            // });
        }
    }
};
  
document.addEventListener("DOMContentLoaded", () => {
    app.init();
});
  