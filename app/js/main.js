
  
  
$(function(){


  $('.hamburger').click(function(){
   $('.header__nav ul').slideToggle();
  });

  $('.header__slaider-fade').slick({
    dots: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          arrows: false,
        }
      }
    ]
  });
    
  $('.slaider_collective').slick({
    dots:true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: false,
        }
      }
    ]
  });
  $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
    
    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
    });
    });
    
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
      } else {
      $('.scrollup').fadeOut();
      }
      });
       
      $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1500);
      return false;
      });
});




