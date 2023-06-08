/* ===================================
  Circle Type Text Script
  ====================================== */
  const circleType = new CircleType(document.getElementById('half-round'));
  circleType.radius(90).dir(-1);

  /* ===================================
  Preloader Script
  ====================================== */
    setTimeout(function() {
      $('#cliqer-preloader').addClass('loaded');
      $('body').removeClass('no-scroll-y');

      if ($('#cliqer-preloader').hasClass('loaded')) {
        $('#preloader').delay(1000).queue(function() {
          $(this).remove();
        });
      }
    }, 3000);

$(document).ready(function() {

  /* ===================================
    Scroll Bottom to top
    ====================================== */
   $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
          $('.scroll-top').fadeIn();
      } else {
          $('.scroll-top').fadeOut();
      }
    });
    $('.scroll-top').click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 100);
      return false;
    });

   /* ===================================
    Tags Item Slider
    ====================================== */
    new Swiper('.tags-item-slider', {
        loop: true,
        speed: 6000,   
        autoplay: {
          delay: 5,
          disableOnInteraction: false,
        },
        navigation: false,
        slidesPerView: 3,
        paginationClickable: false,
        spaceBetween: 30,
        breakpoints: {
          1200: {
              slidesPerView: 4
          },
          1200: {
              slidesPerView: 3
          },
          768: {
              slidesPerView: 2
          },
          575: {
              slidesPerView: 1
          },
          0: {
              slidesPerView: 1
          }
        }
    });

    /* ===================================
    Team Slider
    ====================================== */
    var swiper = new Swiper(".team-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      speed: 900,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }
      },
    });

    /* ===================================
    Blog Slider
    ====================================== */ 
    var swiper = new Swiper(".blog-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      speed: 900,
      navigation: false,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    /* ===================================
    Testimonial Slider
    ====================================== */
    var swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      speed: 900,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      },
    });
  
    /* ===================================
    Service Slider
    ====================================== */
    var swiper = new Swiper('.service-items', {
      direction: 'vertical',
      slidesPerView: 2,
      mousewheel: true,
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
           direction: 'horizontal',
        },
        768: {
          slidesPerView: 2,
         
        },
      },
    });

 /* ===================================
    Counter script
    ====================================== */
  $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });  

  /* ===================================
   off-canvae menu toggle
   ====================================== */
  $(".mobile-button").click(function(){
    $(".off-canvace-menu").addClass("open_menu");
  });
  $(".close-menu").click(function(){
    $(".off-canvace-menu").removeClass("open_menu");
  });

  /* ===================================
   sticky header script
  ====================================== */
  $(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

});




