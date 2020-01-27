$(document).ready(function () {

	//accordion
    $('.panel__heading').click(function () {
        $(this).toggleClass('active').next().slideToggle();
        $('.panel__heading').not(this).removeClass('active').next().slideUp();
    });

	//tabs
    $('.tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-link').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');;
		$("#"+tab_id).addClass('current');
	})

});