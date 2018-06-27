$(document).ready(function () {

    $('.panel-heading').click(function () {
        $(this).toggleClass('in').next().stop(true,true).slideToggle();
        $('.panel-heading').not(this).removeClass('in').next().slideUp();
        event.preventDefault();
    });

});
