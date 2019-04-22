
(function(){
	  
    // Append a close trigger for each block
    $('.menu .content').append('<span class="close">x</span>');		
    // Show window
    function showContent(elem){
        hideContent();
        elem.find('.content').addClass('expanded');
        elem.addClass('cover');	
    }
    // Reset all
    function hideContent(){
        $('.menu .content').removeClass('expanded');
        $('.menu li').removeClass('cover');		
    }
    
    // When a li is clicked, show its content window and position it above all
    $('.menu li').click(function() {
        showContent($(this));
    });		
    // When tabbing, show its content window using ENTER key
    $('.menu li').keypress(function(e) {
        if (e.keyCode == 13) { 
            showContent($(this));
        }
    });

    // When right upper close element is clicked  - reset all
    $('.menu .close').click(function(e) {
        e.stopPropagation();
        hideContent();
    });		
    // Also, when ESC key is pressed - reset all
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { 
          hideContent();
        }
    });

    $('.tablinks-0').click(function(e) {
      $('.tablinks.active').removeClass('active');	
      $('.tabcontent').hide();
      
  });	
    
  })();

  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  $( function() {
    $( ".select" ).selectmenu();
    $( ".datepicker" ).datepicker();
    

  } );

  function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

  

 