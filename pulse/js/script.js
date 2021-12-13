$(document).ready(function(){
  var status;
    $('.slider__inner').slick({
        speed: 1000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-right.png"></button>',
      });
      $('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('section.catalog').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__more').eq(i).toggleClass('catalog-item__more_active');
            })
        });
    }
    toggleSlide('a.catalog-item__link');
    toggleSlide('a.catalog-item__link-back');

    $('div.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('section.catalog').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

  function button(item){
        $(item).on('click', function(){
          if (item == '[data-modul = consult]'){
            $('.overlay, .modal__consult').fadeIn();
          } 
          // else if (item == 'button.button_submit')
          // {
          //   $('.modal__consult, .modal__buy').fadeOut();
          //   $('.overlay, .modal__submit').fadeIn();
          // } 
          else if (item == 'div.modal__close'){
            $('.overlay, .modal__consult, .modal__submit').fadeOut();
          }
        })
  }
      $('button.catalog-item__btn').each(function(i){
        $(this).on('click', function() {
          $('.modal__buy .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, .modal__buy').fadeIn();
        });

      });
      button('[data-modul = consult]');
      button('div.modal__close');

      function validateForms(form){
        $(form).validate({
          rules: {
            name: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: "Пожалуйтся, введите имя",
            email: {
              required: "Введите ваш E-mail",
              email: "Ваш адрес должен быть в формате: name@domain.com"
            }
          }
        });
      }
      validateForms('.modal__buy .feed-form');
      validateForms('.modal__consult .feed-form');
      validateForms('.consult .feed-form');

      $("input[name=phone]").mask("+375(99)999-99-99");
      
      $('form').submit(function (e){
        e.preventDefault();
        $.ajax({
          type: "POST",          
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function(){
          $(this).find("input").val("");
          $('.modal__consult, .modal__buy').fadeOut();
          $('.overlay, .modal__submit').fadeIn();

          $('form').trigger('reset');
          return false;
        });
    });



    $(window).scroll(function(){
      if ($(this).scrollTop() > 1600){
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });
    new WOW().init();
});

