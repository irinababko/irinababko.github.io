$(document).ready(function () {

    $('.panel__heading').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel__heading').not(this).removeClass('in').next().slideUp();
    });

    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');;
		$("#"+tab_id).addClass('current');
	})

});