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
      autoplayHoverPause: false,
      autoplay: false,
      smartSpeed: 1000,
      dots: true,
      center: true,
      margin: 10
    });

    $("#results .owl-carousel").owlCarousel({
        center: true,
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

$('#teachers .owl-carousel').owlCarousel({
    margin: 40,
    dots: !0,
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


$('.share .icon:first-child').on('mouseenter', function (e) {
    $(this)[0].parentElement.querySelector('.hidden').classList.add('open')
})


$('.share').on('mouseleave', function (e) {
    $('.share .hidden').removeClass('open')
})
