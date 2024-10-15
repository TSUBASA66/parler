$(window).on('scroll',function(){
  $(".JS_ScrollAnimationItem").each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight){
      $(this).addClass('isActive');
    } else{
      $(this).removeClass('isActive');
    }
  });
 });

$(function(){
	$('a[href^="#"]:not(a.js-modal-open)').click(function(){
	  var speed = 300;
	  var href= $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top - 100;
	  $("html, body").animate({scrollTop:position}, speed, "swing");
	  return false;
	});
  });

function fadeAnime(){
  $('.fadeUpTrigger').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');
    }
    });
}

  $(window).scroll(function (){
    fadeAnime();
  });

  $(function() {
    $('.btn_active01').click(function() {
      $(this).addClass('active');
      $('#area2').addClass('active');
      $(window).scrollTop($('#area2').position().top);
    });
  });
  
  
  $(function() {
    $('.btn_active02').click(function() {
      $(this).addClass('active');
      $('#area3').addClass('active');
      $(window).scrollTop($('#area3').position().top);
      $('#area4').addClass('active');
  
      if ($(this).hasClass('active')) {
              $('.btn_active01').removeClass('active');
          } else {
        $('.btn_active01').addClass('active');
          }
    });
  
    $('.btn_active03').click(function() {
      $(this).addClass('active');
      $('#area4').addClass('active');
      $(window).scrollTop($('#area4').position().top);
      if ($(this).hasClass('active')) {
        $('.btn_active02').removeClass('active');
          } else {
        $('.btn_active02').addClass('active');
          }
    });
    $('.btn_active04').click(function() {
      $(this).addClass('active');
      $('#area5').addClass('active');
      $(window).scrollTop($('#area5').position().top);
      if ($(this).hasClass('active')) {
        $('.btn_active03').removeClass('active');
          } else {
        $('.btn_active03').addClass('active');
          }
    });

    $('.btn_active05').click(function() {
      $(this).addClass('active');
      $('#area5').addClass('active');
      $(window).scrollTop($('#area3').position().top);
      if ($(this).hasClass('active')) {
        $('.btn_active03').removeClass('active');
          } else {
        $('.btn_active03').addClass('active');
          }
    });


  });
