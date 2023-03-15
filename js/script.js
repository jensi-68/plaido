$(document).ready(function(){
     $("#online_game").owlCarousel({
       loop: true,
       margin: 10,
       nav: true,
       navText:
       [
        '<i class="fa-solid fa-angle-left"></i>',
        '<i class="fa-solid fa-angle-right"></i>'
      ],
      autoplay:true,
      autoplayTimeout:3000,
      dots:false,
       responsive: {
         0: {
           items: 1,
         },
         600: {
           items: 3,
         },
         1000: {
           items: 4,
         },
       },
     });
})
$(window).scroll(function () {
  var sticky = $(".sticky"),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass("fixed");
  else sticky.removeClass("fixed");
});