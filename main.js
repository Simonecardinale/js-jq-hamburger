var hMenu = $('.hamburger-menu');

$(document).ready(function(){
    $('.header-right > a > i.fa-bars').click(function(){
        hMenu.toggle(function(){
            hMenu.fadeIn(2000);
            $('.hamburger-menu > a > i.fa-times').click(function(){
                hMenu.fadeOut(1000);
            });
        });
    });
});

