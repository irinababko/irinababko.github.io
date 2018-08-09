
//NAV
// function openFunction() {
//     var x = document.getElementById("nav-left");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }
$('.menu-mob__link').click(function() {
    $(this).toggleClass('menu-mob__link_active');
    $('.menu-mob').toggleClass('menu-mob_active');
});

$('.menu-mob a').click(function() {
    $('.menu-mob').toggleClass('menu-mob_active');
    $('.menu-mob__link').toggleClass('menu-mob__link_active');
});

$('.icon-search-mob').click(function() {
    $('.search-mob').toggleClass('hide');
});

$('.newsletter-btn').click(function() {
    $('.newsletter-mob').toggleClass('hide');
});
$('.arrow').click(function() {
    $('.newsletter-mob').toggleClass('hide');
});


$(document).ready(function(){

    $(".nav-mobile").on("click", function(){
        // $(".nav-list").animate({
        //     height: 'toggle'
        // });
        $(".nav-list").toggleClass('active');
    });

});

// var container = document.querySelector('#container-1');
// var msnry = new Masonry( container, {
//     // Настройки
//     columnWidth: 200,
//     itemSelector: '.item'
// });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2,
            dots: true
        },
        1025:{
            items:3,
            dots: true
        },
        1200:{
            items:3,
            dots: true
        },
        1500:{
            items:4
        }
    }
})