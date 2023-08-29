class CommonBody {

  constructor() {
    this.common();
  }

  common() {

    // JavaScript Document

    /*///hunberger/////*/
    // "use strict";
    $(function () {
      const hamburger = $(".hamburger");
      const nav = $(".nav");

      hamburger.click(function () {
        $(this).find(".hamburger_bar").toggleClass("is_active");
        nav.toggleClass("is_active");
      });
    });

    //////////fadein///////
    $(function(){
      $(window).scroll(function(){
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.fadein').not('.page-index .fadein').each(function(){
          const targetPosition = $(this).offset().top;
          if (scroll>targetPosition-windowHeight+150){
            $(this).addClass("js-fadein");
          }
        });
      });
    });

    return console.log('Common');
  }

}

new CommonBody();