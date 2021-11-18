$( document ).ready(function() {
  $(".search button").click(function(){
    alert("Hello");
  })
  $('.mobile_menu').click(function(){
    $(this).toggleClass('active');
    $('body').toggleClass('menu_open');
    $('.mobile_drop').toggleClass('active');
    $('.bottom_availability ').toggleClass('menu_open');
  });
});