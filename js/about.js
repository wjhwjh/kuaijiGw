let
    $teachUl1 = $('.teach-box1 .cont-list'),
    $teachUl2 = $('.teach-box2 .cont-list'),
    $teachLi1 = $('.teach-box1 .cont-list li'),
    $teachLi2 = $('.teach-box2 .cont-list li'),
    $teachDesBox1 = $('.teach-box1 .des-box'),
    $teachDesBox2 = $('.teach-box2 .des-box'),
    $teachDes1 = $('.teach-box1 .des-box > div'),
    $teachDes2 = $('.teach-box2 .des-box > div');

$teachLi1.mouseenter(function() {
    let index = $(this).index();
    $teachDesBox1.fadeIn();
    $teachDes1.eq(index).siblings().fadeOut();
    $teachDes1.eq(index).fadeIn();
});

$teachUl1.mouseleave(function() {
    $teachDesBox1.fadeOut();
});
$teachLi2.mouseenter(function() {
    let index = $(this).index();
    $teachDesBox2.fadeIn();
    $teachDes2.eq(index).siblings().fadeOut();
    $teachDes2.eq(index).fadeIn();
});

$teachUl2.mouseleave(function() {
    $teachDesBox2.fadeOut();
});