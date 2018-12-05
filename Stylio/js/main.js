$(document).ready(function(){

new WOW().init();

$('.menu-link').click(function() {
$(this).toggleClass('menu-link_active');
$('.menu').toggleClass('menu_active');
});

$('.menu a').click(function() {
$('.menu').toggleClass('menu_active');
$('.menu-link').toggleClass('menu-link_active');

// if ($(window).width() > 768) {
//     new WOW().init();
//     }

});

// Navigation //
$("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
    
    //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
     
    //анимируем переход на расстояние - top за 1500 мс
    if ($(window).width() < 1023) {
        $('body,html').animate({scrollTop: top-60}, 1500);
    } else {
        $('body,html').animate({scrollTop: top-50}, 1500);
    }

});

// (function() {
    var navLinks = $('nav ul li a'),
        navH = $('nav').height(),
        section = $('section'),
        documentEl = $(document);
    
        documentEl.on('scroll', function() {
        var currentScrollPos = documentEl.scrollTop();
        
        section.each(function() {
            var self = $(this);
            if ( self.offset().top < (currentScrollPos + navH + 50) && (currentScrollPos + navH + 50) < (self.offset().top + self.outerHeight()) ) {
                var targetClass = '.' + self.attr('class') + '-link';
                navLinks.removeClass('current');
                $(targetClass).addClass('current');
            }
        }); 
    });    
// })();

// собираем все якоря; устанавливаем время анимации и количество кадров
// const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
//       animationTime = 500,
//       framesCount = 20;

// anchors.forEach(function(item) {
//   // каждому якорю присваиваем обработчик события
//   item.addEventListener('click', function(e) {
//     // убираем стандартное поведение
//     e.preventDefault();
    
//     // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
//     let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;
    
//     // запускаем интервал, в котором
//     let scroller = setInterval(function() {
//       // считаем на сколько скроллить за 1 такт
//       let scrollBy = coordY / framesCount;
      
//       // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
//       // и дно страницы не достигнуто
//       if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
//         // то скроллим на к-во пикселей, которое соответствует одному такту
//         window.scrollBy(0, scrollBy);
//       } else {
//         // иначе добираемся до элемента и выходим из интервала
//         window.scrollTo(0, coordY);
//         clearInterval(scroller);
//       }
//     // время интервала равняется частному от времени анимации и к-ва кадров
//     }, animationTime / framesCount);
//   });
// });

    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $('#menu').addClass('fixed');
        }
        else if ($(this).scrollTop()<50){
            $('#menu').removeClass('fixed');
        }
    });
});

// Counter Number //
$(window).scroll(function(){
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    if (($(window).scrollTop() >= "1300")&&($(window).scrollTop() <= "2000")){

    $({countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    }); 
}

  });
});

// Button UP //
$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх"><i class="fas fa-angle-double-up"></i></a>');
  });
  
  $(function() {
   $.fn.scrollToTop = function() {
       
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);

    $(window).scroll(function() {
     if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
     else $(scrollDiv).fadeIn("slow")
    });

    $(this).click(function() {
     $("html, body").animate({scrollTop: 0}, "slow")
    })
   }
  });
  
  $(function() {
   $("#go-top").scrollToTop();

   
  });


// // When the user scrolls the page, execute myFunction 
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementsByClassName("header");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// var title = document.getElementsByClassName("features-title"),
// content = document.getElementsByClassName("features-content");

//         for (var i = 0; i < title.length; i++) {
//             title[i].addEventListener('click', function() {

//             if (!(this.classList.contains('active'))) {
//             for (var i = 0; i < title.length; i++) {
//                 title[i].classList.remove('active');
//             }
//                 this.classList.add('active');
//             } else {
//                 this.classList.remove('active');
//             }
            


        //     var level1 = document.getElementsByClassName("phone__img-1");
        //     for (var i = 0; i < title.length; i++) {
        //     title[i].addEventListener("click", function() {
        //         level1.classList.toggle("level1");
        //     })
        // }

        // })
        

        
        // }

// var level1 = document.getElementsByClassName("phone__img-1");
// for (var i = 0; i < level1.length; i++) {
//     level1[i].addEventListener("click", function() {
//     this.classList.toggle("level1");

//     });
// }

// ***TABS*** //
function openPhone(evt, tabName) {
    
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}
    document.getElementById("defaultOpen").click();

// var slideIndex = 0;
//     showSlides();
                    
//         function showSlides() {
//         var i;
//         var slides = document.getElementsByClassName("mySlides");
//         var dots = document.getElementsByClassName("dot");
//         for (i = 0; i < slides.length; i++) {
//             slides[i].style.display = "none";  
//         }
//         slideIndex++;
//         if (slideIndex > slides.length) {slideIndex = 1}    
//         for (i = 0; i < dots.length; i++) {
//             dots[i].className = dots[i].className.replace(" active", "");
//         }
//         slides[slideIndex-1].style.display = "block";  
//         dots[slideIndex-1].className += " active";
//         setTimeout(showSlides, 10000); 
// }

document.getElementById('slider-left').onclick = sliderLeft;
document.getElementById('slider-right').onclick = sliderRight;
// autoSlider();
var left = 0;
var timer;

// function autoSlider() {
//     timer = setTimeout(sliderLeft, 1000);
// }


function sliderLeft() {
    var content = document.getElementById('slider-content');
    left = left - 272;
    if (left < -1800) {
        left = -1632;
        // clearTimeout(timer);
        // left = 0;       
        // document.getElementById('slider-left').style.display = "none";
    }
    content.style.left = left + 'px';
}

function sliderRight() {
    var content = document.getElementById('slider-content');
    left = left + 272;
    if (left > 0) {
        left = 0;      
    }
    content.style.left = left + 'px';
}

var title = document.getElementsByClassName("accordion-title"),
content = document.getElementsByClassName("accordion-content");

for (var i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function() {

    if (!(this.classList.contains('active'))) {
    for (var i = 0; i < title.length; i++) {
        title[i].classList.remove('active');
}
    this.classList.add('active');
} else {
    this.classList.remove('active');
}

})
}


// Get the modal
var modal = document.getElementById('modal');

// var btnReg = document.getElementById('btn-reg');
// btnReg.onclick = function(event) {
//     if (event.target == btnReg) {
//         modal.style.display='block';
//     }
// }
// var close = document.getElementById('close');
// close.onclick = function(event) {
//     if (event.target == close) {
//         modal.style.display='none';
//     }
// }
// var modal = document.getElementById('modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { 
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", 
			data: th.serialize()
		}).done(function() {
			alert("Done!");
			setTimeout(function() {
				document.getElementById('id01').style.display='none';
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});