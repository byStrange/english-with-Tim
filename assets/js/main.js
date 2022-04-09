// 'use strict';
(function(){
    document.querySelector('.nav-links').querySelectorAll('li').forEach( item => {
        item.onmouseenter = function (event) {
            move.css({
                opacity: 1,
                left: this.offsetLeft + 'px',
                width: this.offsetWidth + 'px'
            })
        }
        item.onmouseleave = function (event) {
            move.css({
                opacity: 0,
            })
        }
    })
})();

// (function(){
//     new Splide('#courses .splide', {
//         rewind: true, 
//         padding: '5rem',
//         width: "500px",
//         perPage: 1
//     }).mount()
// })();
$(document).ready(function(){
    $("#courses .owl-carousel").owlCarousel({
        responsive: {
            0: {
              items: 1,
            },
            1000: {
              items: 3,
            }
          },
    reponsiveClass: true,
    navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>'
    ],
      autoplayHoverPause: false,
      autoplay: false,
      smartSpeed: 1000,
      dots: false,
      nav:true,
    });

    $("#results .owl-carousel").owlCarousel({
        // center: true
        items: 2,
        responsive: {
            0: {
              items: 1,
            },
            1400: {
              items: 2,
            },
            1600: {
                items: 3
            }
          },
    })
  });