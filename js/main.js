window.onload = function() {
    var input = document.querySelector('input[type=range]'),
        style_el = document.createElement('style'),
        styles = [],
        track_sel = ['::-webkit-slider-runnable-track'];
    document.body.appendChild(style_el);

    styles.push('');

    input.addEventListener('input', function() {
        var min = this.min || 0,
            max = this.max || 100,
            c_style, u, edge_w, val, str = '';

        this.setAttribute('value', this.value);

        val = this.value + '% 100%';
        str += 'input[type="range"]' + track_sel[0] + '{background-size:' + val + '}';

        styles[0] = str;
        style_el.textContent = styles.join('');
    }, false);

}

// function checkAll(oForm,checked) {
//     oForm['checkbox[1]'].checked = checked;
//     oForm['checkbox[2]'].checked = checked;
//     oForm['checkbox[3]'].checked = checked;
// }


$(document).ready(function(){
    $(".add-phone").one('click', function(){
        $(".phone-block_item").append("<input type='tel' placeholder='(+38___)___ __ __'>");
    });

    $(".add-email").one('click', function(){
        $(".email-block_item").append("<input type='email' placeholder='myemail@gmail.com'>");
    });
});

function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1  + '%';
        }
    }
}

$(document).ready(function() {
    $('#btn-save').click( function() {
        $('input[required]').addClass('req');
    });
});

$(document).ready(function() {
    $('.culc-btn').click( function() {
        $('a span').toggleClass('active');
    });
});


$(document).ready(function() {
    $('.accordion > li:eq(10) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
});


    // $(document).ready(function() {
    //     $(".btn").click(function() {
    //         $("." + this.id).slideToggle("slow");
    //         $(this).toggleClass("active");
    //     });
    // });

$(document).ready(function() {
    // $('.dispath-block .switch-item-1 input').click( function() {
    //     $('.title-1').toggleClass('title-color');
    // });
    // $('.dispath-block .switch-item-2 input').click( function() {
    //     $('.title-2').toggleClass('title-color');
    // });
    // $('.dispath-block .switch-item-3 input').click( function() {
    //     $('.title-3').toggleClass('title-color');
    // });
    // $('.dispath-block .switch-item-4 input').click( function() {
    //     $('.title-4').toggleClass('title-color');
    // });
    $('.dispath-block .switch-item-5 input').click( function() {
        $('.title-5').toggleClass('title-color');
    });
    // $('.dispath-block .switch-item-6 input').click( function() {
    //     $('.title-6').toggleClass('title-color');
    // });
    // $('.dispath-block .switch-item-7 input').click( function() {
    //     $('.title-7').toggleClass('title-color');
    // });
    // $('.dispath-block .switch-item-8 input').click( function() {
    //     $('.title-8').toggleClass('title-color');
    // });
    // $('.dispath-block .switch-item-9 input').click( function() {
    //     $('.title-9').toggleClass('title-color');
    // });

});





