// Preloader

$(window).on('load', function () {
    setTimeout(function(){
        $('#spinner').fadeOut();
        $('#page-preloader').delay(300).fadeOut('slow');
        $('body').removeClass('no-overflow');
    }, 400);
});

$(document).ready(function () {

    // Collapse menu
    $(".menu_btn").click(function(){
        $("#navbar").slideToggle();
    });

    $('ul.nav a').on('click', function () {
        if (navbar_collapse.hasClass('in')) {
            $(".navbar-toggle").click();
        }
    });

    // CountTo счетчик для цифр
    $('.counter').each(function() {
        $(this).appear(function() {
            var $endNum = parseInt($(this).find('.counter-num').text());
            $(this).find('.counter-num').countTo({
                from: 0,
                to: $endNum,
                speed: 1200,
                refreshInterval: 30
            });
            return false;
        },{accX: 0, accY: 0});
    });

    //ScrollSpy
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 80)
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Всплывающее окно с формой

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name-c',
        closeBtnInside: false,
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name-c';
                }
            }
        }
    });


    //Ajax отправка формы
    $("#order-form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $("#order-form").serialize()
        }).done(function() {
            $("#order-form .inputs-form, #order-form .submit-form, #order-form .title-form h3, .startscreen .bg-form1, .startscreen .bg-form2").remove();
            $("#order-form .title-form").html("<h3>Спасибо за заявку!<br />Вы поставлены в очередь<br />на звонок.</h3>")
        });
        return false;
    });

});
