$(document).ready(function(){
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        slidesToShow: 1, 
    });
    // product pop-up
    $('.venobox').venobox({
        arrowsColor:'#709dca',
        closeBackground:'#ffc155',
        closeColor: 'firebrick',
        spinner: 'three-bounce',
    }); 


});