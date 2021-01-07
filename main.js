$(document).ready(function(){
    $('i.fa-bars').click(function(){
        var hMenu = $('.hamburger-menu');
        hMenu.toggle(function(){
            hMenu.fadeIn(2000);
            $('i.fa-times').click(function(){
                hMenu.fadeOut(1000);
            });
        });
    });
});