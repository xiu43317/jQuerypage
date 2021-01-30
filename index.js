$(document).ready(function () {
    $('.pages > li > a').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();
        $(this).parent().find('ul').slideToggle();
    });
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        speed:3000,
        loop: true,
        spaceBetween: 0,
        autoplay:{
            delay:1500,
        },
        effect:'slider',

    });
    $('.fa-arrow-circle-up').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },800)
    });
});