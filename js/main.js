$(window).load(function() {
   $("#loading").fadeOut(1000);
})

$(document).ready(function() {
    $("body").css({overflow:'auto'});
});


// When the user scrolls the page, execute defillement
window.onscroll = function() {defillement()};

// When the user load the page, execute redimensionnement
window.onload = function() {redimensionnement()};

// When the user resize the page, execute redimensionnement
window.onresize = function() {redimensionnement()};

// Get the header
var header = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function defillement() {
  if (window.pageYOffset > sticky || $(window).width() < 751) {
    header.classList.add("affix");
  } else {
    if ($(window).width() > 751) {
      header.classList.remove("affix");
    }
  }
}

function redimensionnement() {
  if ($(window).width() < 751) {
     header.classList.add("affix");
   }
   else {
     header.classList.remove("affix");
   }
}

function changerLangueAnglais() {
  console.log("anglais");
  document.getElementById("anglais").style.display = "block";
  document.getElementById("francais").style.display = "none";
}

function changerLangueFrancais() {
  console.log("francais");
  document.getElementById("anglais").style.display = "none";
  document.getElementById("francais").style.display = "block";
}

$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1,
          adaptiveHeight: true
        }
      },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
        adaptiveHeight: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '30px',
        slidesToShow: 1,
        adaptiveHeight: true
      }
    }
  ]
});
});

function main() {

(function () {
   'use strict';

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});

}());


}
main();
