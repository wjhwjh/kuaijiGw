let $bannerVideoLeft = $('.banner-video .left > div'),
    $videoList = $('.banner-video .video-ul li');

console.log($bannerVideoLeft);
$videoList.click(function() {
    let index = $(this).index();
    console.log(index);
    $bannerVideoLeft.eq(index).siblings().fadeOut();
    $bannerVideoLeft.eq(index).fadeIn();
});