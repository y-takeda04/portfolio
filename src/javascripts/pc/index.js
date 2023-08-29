class Index {

  constructor() {
    if (Common.getName('Index')) {
      this.index();
    }
  }

  index() {
    /*///hamburger/////*/
    "use strict";
    $(function () {


    //////////スライドショー///////////
      $('.slider').slick({
        autoplay:true,
        Infinity:true,
        slidesToShow: 3,
        autoplaySpeed:2500,
        arrows:false,
        dots:true,
        responsive:[{
          breakpoint:768,
          arrows:false,
          centerMode:true,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
          }
        }]
      });

    //////////category////////////
      $(window).scroll(function(){
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.genre').each(function(){
          const targetPosition = $(this).offset().top;
          if (scroll>targetPosition-windowHeight+150){
            $(this).addClass("js-fadein");
          }
        });
      });

    /*////pagetop/////////*/
      var pagetop = $('#page_top');   
      pagetop.hide();
      $(window).scroll(function () {
          if ($(this).scrollTop() > 2000) {  //100pxスクロールしたら表示
              pagetop.fadeIn();
          } else {
              pagetop.fadeOut();
          }
      });
    $('a[href^="#"]').click(function(){
      var time = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" ? 'html' : href);
      var distance = target.offset().top;
      $("html, body").animate({scrollTop:distance}, time, "swing");
      return false;
    });


    /////////fade順番///////////
      $(window).scroll(function (){
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        
        if(windowWidth < 780) {
          // SPの挙動を記載
          $('.fadein').each(function(){
            var position = $(this).offset().top;
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
        } else {
          // PCの挙動を記載
          $('.fadein').each(function(i){
              var position = $(this).offset().top;
              if (scroll > position - windowHeight + 200){
                $(this).delay(i * 200).queue(function(){
                    $(this).addClass('active');
                });
              }
          });
        }
      });
    });

  }

}

new Index();