(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    countAnimate();
    //灯光动画
    function show_light() {
        var $l1 = $('.l1'),
            $l2 = $('.l2');
        $l1.animate({
            opacity: 1
        },function () {
            $l2.animate({
                opacity: 1
            });
            hide_light();
        });
        function hide_light() {
            $l1.animate({
                opacity: 0
            },function () {
                $l2.animate({
                    opacity: 0
                });
            });
        }
    }
    window.setInterval(show_light,1000);

    //计数器动画
    function countAnimate() {
        var $uls = $('.numBoxInner').find('ul');
        window.setTimeout(function () {
            $uls.addClass('act');
        },1000);
    }
    //计数器
    //@param string
    count('12323');
    function count(numStr) {
        countAnimate();
        var numArr = ('00000000' + numStr).slice(-8);
        numArr = new Array(numArr[0],numArr[1],numArr[2],numArr[3],numArr[4],numArr[5],numArr[6],numArr[7]);
        var $box = $('.numBoxInner'),
            $uls = $box.find('ul');
        $.each($uls,function (index,ele) {
            var $curLi = ele.children;
            if(index == 7){
                $.each($curLi,function (i,e) {
                    e.innerText = numArr[7];
                });
            }else if(index == 6){
                $.each($curLi,function (i,e) {
                    e.innerText = numArr[6];
                });
            }else if(index == 5){
                $.each($curLi,function (i,e) {
                    e.innerText = numArr[5];
                });
            }else if(index == 4){
                $.each($curLi,function (i,e) {
                    e.innerText = numArr[4];
                });
            }else if(index == 3){
                $.each($curLi,function (i,e) {
                    e.innerText = numArr[3];
                });
            }else if(index == 2){
                $.each($curLi,function (i,e) {
                    e.innerText = numArr[2];
                });
            }else if(index == 1){
                $.each($curLi,function (i,e) {
                    e.innerText = numArr[1];
                });
            }else if(index == 0){
                $.each($curLi,function (i,e) {
                    e.innerText = numArr[0];
                });
            }
        });
    }
    //首页抽奖按钮
    var f_;
    $('.cjBtn').on('click',function () {
        if($(this).hasClass('active')){
            return false;
        }else{
            //timerCj = window.setInterval(gameBtnAnimate,550);
            $('.n1').children().text(0);
            $('.n2').children().text(0);
            $('.n3').children().text(0);
            $(this).addClass('active');
            flag = true;
            showTc_1();
            if($(this).hasClass('_1')){
                f_ = 1;
            }else if($(this).hasClass('_2')){
                f_ = 2;
            }else{
                f_ = 3;
            }
        }
    });
    //弹出老虎机弹窗
    function showTc_1() {
        $('.tc_1').fadeIn();
        showMask();
    }
    //关闭老虎机弹窗
    function hideTc_1() {
        $('.tc_1').fadeOut();
        hideMask();
    }
    //老虎机抽奖按钮
    var flag = true;
    $('.tcCjBtn').on('click',function () {
        //window.clearInterval(timerCj);
        var $n1 = $('.n1'),
            $n2 = $('.n2'),
            $n3 = $('.n3'),
            nums_a = Math.floor(Math.random()*10),
            nums_b = Math.floor(Math.random()*10),
            nums_c = Math.floor(Math.random()*10);
        if(flag){
            $n1.addClass('act');
            $n2.addClass('act');
            $n3.addClass('act');
            var timer0 = window.setTimeout(function () {
                $n3.removeClass('act');
                $n3.children().text(nums_a);
            },1000);
            var timer1 = window.setTimeout(function () {
                $n2.removeClass('act');
                $n2.children().text(nums_b);
            },2000);
            var timer2 = window.setTimeout(function () {
                $n1.removeClass('act');
                $n1.children().text(nums_c);
            },3000);
            var timer3 = window.setTimeout(function () {
                hideTc_1();
                if(f_ == 1){
                    $('.mbBox div:nth-child(1) span').text(nums_c.toString()+nums_b.toString()+nums_a.toString());
                }else if(f_ == 2){
                    $('.mbBox div:nth-child(2) span').text(nums_c.toString()+nums_b.toString()+nums_a.toString());
                }else if(f_ == 3){
                    $('.mbBox div:nth-child(3) span').text(nums_c.toString()+nums_b.toString()+nums_a.toString());
                }
            },4000);
            flag = false;
        }

    });
    //老虎机按钮动画
    function gameBtnAnimate() {
        $('.tcCjBtn').animate({
            bottom: '0.6rem'
        },250,function () {
            $('.tcCjBtn').animate({
                bottom: '0.4rem'
            },250)
        });
    }
   //var timerCj = window.setInterval(gameBtnAnimate(),550);
    //首页再玩一次按钮动画
    window.setInterval(function () {
        $('footer div img').animate({
            width: '90%',
            height: '90%'
        },100,function () {
            $('footer div img').animate({
                width: '100%',
                height: '100%'
            },100);
        });
    },250);
    //首页再玩一次按钮
    $('#gemeAgainBtn').on('click',function () {
        showTc_2_3();
    });
    //首页点击领奖按钮
    $('#ljBtn').on('click',function () {
        window.location.href = 'index1.html';
    });
    //领奖页面领取按钮点击
    $('.btn_lq').on('click',function () {
        if($(this).hasClass('act')){
            return false;
        }else{
            showTc_2_1();
            $(this).addClass('flag');
        }
    });
    //2级页面第一个弹窗取消按钮
    $('.tc-1_1_Btn_qx').on('click',function () {
        hideTc_2_1();
        $('.btn_lq').removeClass('flag');
    });
    //2级页面第一个弹窗领取按钮
    $('.tc-1_1_Btn').on('click',function () {
        $('.flag').addClass('act');
        $('.flag').text('已领取');
        hideTc_2_1();
        showTc_2_2();
    });
    //2级页面第二个弹窗确定按钮
    $('.tc-1_2_Btn').on('click',function () {
        hideTc_2_2();
    });
    //再玩一次弹窗确定按钮
    $('.tc-1_3_Btn').on('click',function () {
        hideTc_2_3();
    });
    //2级页面确认按钮
    $('.entBtn').on('click',function () {
        history.go(-1);
    });
    //显示2级页面第一个弹窗
    function showTc_2_1() {
        $('.tc-1_1').fadeIn();
        showMask();
    }
    //显示2级页面第二个弹窗
    function showTc_2_2() {
        $('.tc-1_2').fadeIn();
        showMask();
    }
    //显示2级页面第三个弹窗
    function showTc_2_3() {
        $('.tc-1_3').fadeIn();
        showMask();
    }
    //隐藏2级页面第一个弹窗
    function hideTc_2_1() {
        $('.tc-1_1').fadeOut();
        hideMask();
    }
    //隐藏2级页面第二个弹窗
    function hideTc_2_2() {
        $('.tc-1_2').fadeOut();
        hideMask();
    }
    //隐藏2级页面第三个弹窗
    function hideTc_2_3() {
        $('.tc-1_3').fadeOut();
        hideMask();
    }
    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
    }
    
});
