$('.banner-slider').slick({
    dots: false,
    arrows:false,
    infinite: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
});


$('.follow-slider').slick({
    dots: false,
    arrows:true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<i class="fa fa-angle-left perv" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-angle-right next" aria-hidden="true"></i>',
});


// $(window).scroll(function(){
//     var scrollamount = $(window).scrollTop()
//     if(scrollamount > 100){
//         $(".menu").addClass("fixed")
//     }else{
//         $(".menu").removeClass("fixed")
//     }
// })



// preloder

setTimeout(function(){
    $(".preloder").slideUp()
},2000)


// ===== wow js 

new WOW().init();



// var top_i= $('.top i');
// var $top_offset = 300;
// top_i.on('click',function(){
//     html_body.animate({
//         scrollTop:0
//     },700);
// }); 