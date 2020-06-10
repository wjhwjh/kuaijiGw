// nav导航
let $navList = $('.nav-list li');
$navList.mouseenter(function() {
    // let index = $(this).index();
    // if (index == 2) {
    //     $('.nav-wrap').addClass('nav-active');
    // } else {
    //     $('.nav-wrap').removeClass('nav-active');
    // }

    $('.nav-wrap').addClass('nav-active');
    $(this).siblings().find('.nav-sub').fadeOut(100);
    $(this).find('.nav-sub').fadeIn(200);
    $(this).find('.nav-sub').css({
        bottom: '-280px'
    });
    $(this).siblings().find('.nav-sub').css({
        bottom: '-250px'
    });
});

// 鼠标移走
$('.nav-wrap').mouseleave(function() {
    $('.nav-wrap').removeClass('nav-active');
    $navList.each(function(i, item) {
        $(this).find('.nav-sub').fadeOut(100)
        $(this).find('.nav-sub').css({
            bottom: '-250px'
        });
    });
});