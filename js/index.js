// part5切换
let $contBarLi = $('.cont-bar li');
let p5Cont = $('.cont-wrap .cont>div');
$contBarLi.mouseenter(function() {
    let index = $(this).index();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    p5Cont.eq(index).siblings().fadeOut();
    p5Cont.eq(index).fadeIn();

});