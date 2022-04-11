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
    center: true,
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




function checkSize() {
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

document.querySelectorAll('dots').forEach(e => {
    var cols = parseInt( e.getAttribute('cols'))
    var rows = e.getAttribute('rows');
    var dots = parseInt(e.getAttribute('dots'))
    var color = e.getAttribute('bcolor');  
    var x = e.getAttribute('x');
    var y = e.getAttribute('y');
    for (let i = 0 ; i < dots; i++) {
        var dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.backgroundColor = color;
        e.appendChild(dot);
        e.css({
            width: cols * 15 + 'px',
            height: rows * 8 + 'px',
        })
    }   
});

// (function(){
//     var pos =  [
//         {
//             x: 30,
//             y: 10
//         }, 
//         {
//             x: 70,
//             y: 10
//         },
//         {
//             x: 10,
//             y: 50
//         },
//         {
//             x: 90,
//             y: 50
//         },
//         {
//             x: 20,
//             y: 90,
//         },
//         {
//             x: 80,
//             y: 90
//         }
//     ]
//     var target = document.querySelectorAll('#about-us .absolute.img');
//     console.log(target)
//     target.forEach( (t, n) => {
//         t.css({
//             top: pos[n].y + '%',
//             left: pos[n].x + '%'
//         })
//     })
// })()

$(document).ready(function () {
    if(window.innerWidth < 1124) {
        $('header .nav-links').slideUp()
    }
    $('#faq .hidden').slideUp();
    $('#faq .collapse[button]').click(function(e){
        $(this).parent().parent().children().eq(1).slideToggle(200);
        $(this).parent().parent().toggleClass('active');
    })
    $('#faq li:not(.active) .question').click(function(e){
        $(this).parent().parent().children().eq(1).slideToggle(200);
        $(this).parent().parent().toggleClass('active');
    })
})



$('.burger').click(e => {
    $('header .nav-links').slideToggle()
})

$('#hideform').click(e => {
    $('#contact #col').toggle(1000);
    document.querySelectorAll('#contact .absolute.img')[1].classList.toggle('_')
})