$(document).ready(function(){
    // this function for tooltip
    $('.tooltipped').tooltip();
    $('#profile').mouseover(function () {
        $('.profile').fadeIn();
    });
    $('#profile').mouseout(function () {
        $('.profile').fadeOut();
    });

    //scroll top function
    $(window).scroll(function(){
        let offset = 250;
        if($(this).scrollTop() > offset){
            $('.go-top').fadeIn();
        }
        else{
            $('.go-top').fadeOut();
        }
    });
    $('.go-top').click(function () {
        $('html').animate({
            scrollTop:0
        });
    });
    $('.menu_trigger').click(function () {
        $('.nav_bar_menu').fadeToggle(555);
    })
    $(window).on('resize', function(){
        let win = $(this); //this = window
        if (win.width() > 1000) {
            location.reload();
        }
    });
});