// show-hide header
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
}

// scroll animate for id
$(document).ready(function(){
    $(".header__nav-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
$(document).ready(function(){
    $(".header__nav-menu.icon-scroll").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

(function() {
var navLinks = $('ul li a'),
    navH = $('nav').height(),
    section = $('section'),
    documentEl = $(document);
    documentEl.on('scroll', function() {
    var currentScrollPos = documentEl.scrollTop();
    section.each(function() {
        var self = $(this);
        if ( self.offset().top < (currentScrollPos + navH + 100) && (currentScrollPos + navH + 100) < (self.offset().top + self.outerHeight()) ) {
            var targetClass = '.' + self.attr('class') + '-link';
            navLinks.removeClass('current');
            $(targetClass).addClass('current');
        }
    });
});
})();

// send message
$(document).ready(function() {
    $("form").submit(function() {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "send.php",
            data: th.serialize()
        }).done(function() {
            alert("Done!");
            setTimeout(function() {
                // document.getElementById('id01').style.display='none';
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
});

// mobile menu open/close
$( document ).ready(function() {
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
    $('.overlay-menu a').click(function () {
        $('#overlay').toggleClass('open');
        $('#toggle').toggleClass('active');
    });

});

//validate form
$("#validate").bind("click", validate);

function validateEmail(email) {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
}
function validate() {
    var $result = $("#result");
    var email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
        return
    } else {
        $result.text(email + " is not valid ");
        $result.css("color", "red");
    }
    return false;
}
$(document).ready(function() {
    $('#validate').click( function() {
        $('input[required]').addClass('req');
        $('textarea[required]').addClass('req');
    });
});
// //
// var fields = form.querySelectorAll('.field')
// form.addEventListener('submit', function (event) {
//     event.preventDefault()
//     checkFieldsPresence()
//
//     var checkFieldsPresence = function () {
//         for (var i = 0; i < fields.length; i++) {
//             if (!fields[i].value) {
//                 console.log('field is blank', fields[i])
//                 var error = generateError('Cant be blank')
//                 form[i].parentElement.insertBefore(error, fields[i])
//             }
//         }
//     }
// })
// $(document).ready(function(){
//
//     $('.submit').click(function(){
//         validateForm();
//     });
//
//     function validateForm(){
//
//         var nameReg = /^[A-Za-z]+$/;
//         var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//
//         var names = $('#name').val();
//         var email = $('#email').val();
//         var message = $('#message').val();
//
//         var inputVal = new Array(names, email, message);
//
//         var inputMessage = new Array("name", "email address", "message");
//
//         $('.error').hide();
//
//         if(inputVal[0] == ""){
//             $('#nameLabel').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
//         }
//         else if(!nameReg.test(names)){
//             $('#nameLabel').after('<span class="error"> Letters only</span>');
//         }
//
//         if(inputVal[1] == ""){
//             $('#emailLabel').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
//         }
//         else if(!emailReg.test(email)){
//             $('#emailLabel').after('<span class="error"> Please enter a valid email address</span>');
//         }
//
//         if(inputVal[2] == ""){
//             $('#messageLabel').after('<span class="error"> Please enter your ' + inputMessage[4] + '</span>');
//         }
//     }
//
// });

//scroll TOP
$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});

