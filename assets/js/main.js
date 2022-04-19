// 'use strict';
(function () {
    document.querySelector('.nav-links').querySelectorAll('li').forEach(item => {
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
$(document).ready(function () {
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
        margin: 10
    });
    $("#results .owl-carousel").owlCarousel({
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            1400: {
                items: 2,
            },
            1600: {
                items: 3,
            }
        },
    })
});
$('#teachers .owl-carousel').owlCarousel({
    dots: true,
    responsive: {
        0: {
            items: 1,
            center: true
        },
        1400: {
            items: 2,
        },
        1600: {
            items: 4
        }
    },
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true
})

$('#about-us .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    center: true,
    dots: !0,
    responsive: {
        0: {
            items: 1,
        },
        1400: {
            items: 3,
        },
        1600: {
            items: 4
        }
    },
})

function checkSize() {
    if (window.innerWidth < 1124) {
        $('header .nav-links').slideUp(100);
    } else {
        $('header .nav-links').slideDown(100);
    }
    if (window.innerWidth < 768) {
        $('.share .hidden').addClass('open')
    } else {
        $('.share .icon:first-child').on('mouseenter', function (e) {
            $(this)[0].parentElement.querySelector('.hidden').classList.add('open')
        })
        $('.share').on('mouseleave', function (e) {
            $('.share .hidden').removeClass('open')
        })
    }
}
checkSize()
$(window).on('resize', checkSize)
$(function () {
    $(document).ready(function () {
        $('#teachers ._hidden').slideUp(1)
        $('#teachers .card .name span.fas').click(function () {
            $(this).parent().parent().children().eq(1).slideToggle(200)
            $(this).toggleClass('rotate')
        })
        $('#faq .hidden').slideUp();
        $('#faq .collapse[button]').click(function (e) {
            $(this).parent().parent().children().eq(1).slideToggle(200);
            $(this).parent().parent().toggleClass('active');
        })
        $('#faq li:not(.active) .question').click(function (e) {
            $(this).parent().parent().children().eq(1).slideToggle(200);
            $(this).parent().parent().toggleClass('active');
        })
    })
    $('.burger').click(e => {
        $('header .nav-links').slideToggle();
    })
    $('#hideform').click(e => {
        $('#contact #col').toggle(1000);
        document.querySelectorAll('#contact .absolute.img')[1].classList.toggle('_')
    })
    $("#openmodal").click(e => {
        $('.modal-container').show();
        $('.modal-container .modal').show(1000);
    })
    $('.modal-container').hide();
    $("#closemodal").click(e => {
        $('.modal-container .modal').hide(1000);
        setTimeout(() => {
            $('.modal-container').hide();
        }, 900)
    })
})
