//myPlugins
  ;(function($){
    $.fn.qTabs = function(){
        var global = this;
        global.find('.tabs-content__item').hide();
        global.find('.tabs-content__item.active').show();
        $(this).find('.tabs-nav li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var data = $(this).find('a').attr('href');
            $(global).find('.tabs-content__item').hide().removeClass('active');
            $(global).find('.tabs-content__item' + data + '').fadeIn(300).addClass('active');
            return false;
        })
    }

    $.fn.qToggle = function(){
        var global = this;
        $(this).click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
  }(jQuery));

  $(window).load(function(){
    $('.catalog__body').masonry({
        itemSelector: '.catalog__item',
        columnWidth: 285
    }).animate({
        opacity: 1
    })

    // popup callback
    var popup = {
        overlay: $('.popup__overlay'),
        form: $('.popup__callback'),
        close: $('.popup__close'),
        init: function(){
            this.listeners();
        },
        listeners: function(){
            this.overlay.on('click', this.hide);
            this.close.on('click', this.hide);
        },
        show: function(){
            console.log('Открытие');
            $('.popup__overlay').fadeIn(300);
            $('.popup__callback').fadeIn(300);
            return false;
        },
        hide: function(){
            console.log('Закрытие');
            $('.popup__overlay').fadeOut(300);
            $('.popup__callback').fadeOut(300);
            return false;
        }
    }
    popup.init();

    $('.callback-button').on('click', popup.show);
  })
  