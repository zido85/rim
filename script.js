$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>20) {
            $("header").addClass('scrolled')
        }
        else {
            $("header").removeClass('scrolled')
        }
    });




    $('.slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      });
      $('.slider-full').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
      });
      $('.slider-clients>div').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
      });

      $('.slider-news').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:true,
        dots:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
      });

      $(document).on('click',".nav-link",function(){
          $(".nav-link").removeClass('active')
          $(this).addClass('active')
      })

      $(document).on('click',".show-desc",function(e){
        e.preventDefault();
        $("#aboutreem").addClass('active')
    })
    $(document).on('click',".hide-desc",function(e){
      e.preventDefault();
      $("#aboutreem").removeClass('active')
  })
})