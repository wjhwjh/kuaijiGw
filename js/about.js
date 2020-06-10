let
    $teachUl1 = $('.teach-box1 .cont-list'),
    $teachUl2 = $('.teach-box2 .cont-list'),
    $teachLi1 = $('.teach-box1 .cont-list li'),
    $teachLi2 = $('.teach-box2 .cont-list li'),
    $teachDesBox1 = $('.teach-box1 .des-box'), //文案整个容器
    $teachDesBox2 = $('.teach-box2 .des-box'),
    $teachDes1 = $('.teach-box1 .des-box > div'), // 每条数据
    $teachDes2 = $('.teach-box2 .des-box > div');



let flag1, flag2;

$teachLi1.click(function() {
    // 去掉下边的模块
    if (!$teachDesBox2.hasClass('act')) {
        $teachDesBox2.addClass('act');
        $teachDes2.each(function() {
            $(this).css('display', 'none');
        });
        flag2 = '';
    }


    let index = $(this).index(); //获取当前索引
    if (flag1 === index) return; //这里必须要使用全等，索引值为0时会发生隐式类型转化
    flag1 = index; //标识赋值

    /*
    判断一个DOM是否展开，如果展开，先合上；

     用定时器，过几分钟再展开；

     问题
    */
    if ($teachDesBox1.hasClass('act')) {
        $teachDesBox1.removeClass('act');
        $teachDes1.eq(index).show();
        let h = $teachDes1.eq(index)[0].clientHeight;
        $teachDesBox1.height(h);
    } else {
        $teachDes1.eq(index).siblings('div').hide();
        // 先合上
        $teachDesBox1.addClass('act');

        // 利用定时器展开
        setTimeout(() => {
            $teachDesBox1.removeClass('act');
            $teachDes1.eq(index).fadeIn();
            let h = $teachDes1.eq(index)[0].clientHeight;
            $teachDesBox1.height(h);
        }, 200)
    }


});

// 第二列
$teachLi2.click(function() {
    // 去掉下边的模块
    if (!$teachDesBox1.hasClass('act')) {
        $teachDes1.each(function() {
            $(this).css('display', 'none');
        });
        $teachDesBox1.addClass('act');
        flag1 = '';
    }

    let index = $(this).index();
    if (flag2 === index) return;
    flag2 = index;

    if ($teachDesBox2.hasClass('act')) {
        $teachDesBox2.removeClass('act');
        $teachDes2.eq(index).show();
        let h = $teachDes2.eq(index)[0].clientHeight;
        $teachDesBox2.height(h);
    } else 2
    $teachDes2.eq(index).siblings('div').hide();
    // 先合上
    $teachDesBox2.addClass('act');

    // 利用定时器展开
    setTimeout(() => {
        $teachDesBox2.removeClass('act');
        $teachDes2.eq(index).fadeIn();
        let h = $teachDes2.eq(index)[0].clientHeight;
        $teachDesBox2.height(h);
    }, 200)

});

// 关闭第一栏中的老师内容
$('.teach-box1 .des-box .close').click(function() {
    $teachDesBox1.addClass('act');
    $teachDes1.each(function() {
        $(this).css('display', 'none');
    })
    flag1 = '';
});

// 关闭第二栏中的老师内容
$('.teach-box2 .des-box .close').click(function() {
    $teachDesBox2.addClass('act');
    $teachDes2.each(function() {
        $(this).css('display', 'none');
    })
    flag2 = '';
});



// 发展大事记
let p3Li1 = $('.part3 .cont-list1 li'),
    p3Li2 = $('.part3 .cont-list2 li'),
    timeNode = $('.time .selectedTimne');

p3Li1.hover(function() {
    let index = $(this).index();
    $(this).addClass('act').siblings().removeClass('act');

    // 去掉时间轴下边li的样式
    for (let i = 0; i < p3Li2.length; i++) {
        p3Li2[i].className = '';
    }
    switch (index) {
        case 0:
            timeNode.eq(0).addClass('act').siblings().removeClass('act');
            break;
        case 1:
            timeNode.eq(2).addClass('act').siblings().removeClass('act');
            break;
        case 2:
            timeNode.eq(4).addClass('act').siblings().removeClass('act');
            break;
        case 3:
            timeNode.eq(6).addClass('act').siblings().removeClass('act');
            break;
        case 4:
            timeNode.eq(8).addClass('act').siblings().removeClass('act');
            break;
    }

});


p3Li2.hover(function() {
    let index = $(this).index();
    $(this).addClass('act').siblings().removeClass('act');
    // 去掉时间轴下边li的样式
    for (let i = 0; i < p3Li1.length; i++) {
        p3Li1[i].className = '';
    }
    switch (index) {
        case 0:
            timeNode.eq(1).addClass('act').siblings().removeClass('act');
            break;
        case 1:
            timeNode.eq(3).addClass('act').siblings().removeClass('act');
            break;
        case 2:
            timeNode.eq(5).addClass('act').siblings().removeClass('act');
            break;
        case 3:
            timeNode.eq(7).addClass('act').siblings().removeClass('act');
            break;
        case 4:
            timeNode.eq(9).addClass('act').siblings().removeClass('act');
            break;
    }

});