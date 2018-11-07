
$(document).ready(function(){
    $(".header__nav-menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function(){
    $(".header__nav-menu.icon-scroll").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

$(document).ready(function() {

    //E-mail Ajax Send
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

// $("#validate").bind("click", validate);
//
// function validateEmail(email) {
//     var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     return re.test(email);
// }
//
// function validate() {
//     var $result = $("#result");
//     var email = $("#email").val();
//     $result.text("");
//
//     if (validateEmail(email)) {
//         return
//     } else {
//         $result.text(email + " is not valid :(");
//         $result.css("color", "red");
//     }
//     return false;
// }
//
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
//     //Check to see if the window is top if not then display button
//     $(window).scroll(function(){
//         if ($(this).scrollTop() > 100) {
//             $('.scrollToTop').fadeIn();
//         } else {
//             $('.scrollToTop').fadeOut();
//         }
//     });
//
//     //Click event to scroll to top
//     $('.scrollToTop').click(function(){
//         $('html, body').animate({scrollTop : 0},800);
//         return false;
//     });
//
// });