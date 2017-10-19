(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
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

    //计数器
    //@param string
    count('1232');
    function count(numStr) {
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
            $(this).addClass('active');
            $('.n1').addClass('act');
            $('.n2').addClass('act');
            $('.n3').addClass('act');
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
        var $n1 = $('.n1'),
            $n2 = $('.n2'),
            $n3 = $('.n3'),
            nums_a = Math.floor(Math.random()*10),
            nums_b = Math.floor(Math.random()*10),
            nums_c = Math.floor(Math.random()*10);
        if(flag){
            $n3.removeClass('act');
            $n3.children().text(nums_a);
            var timer1 = window.setTimeout(function () {
                $n2.removeClass('act');
                $n2.children().text(nums_b);
            },1000);
            var timer2 = window.setTimeout(function () {
                $n1.removeClass('act');
                $n1.children().text(nums_c);
            },2000);
            var timer3 = window.setTimeout(function () {
                hideTc_1();
                if(f_ == 1){
                    $('.mbBox div:nth-child(1) span').text(nums_c.toString()+nums_b.toString()+nums_a.toString());
                }else if(f_ == 2){
                    $('.mbBox div:nth-child(2) span').text(nums_c.toString()+nums_b.toString()+nums_a.toString());
                }else if(f_ == 3){
                    $('.mbBox div:nth-child(3) span').text(nums_c.toString()+nums_b.toString()+nums_a.toString());
                }
            },2500);
            flag = false;
        }

    });
    //首页再玩一次按钮动画
    window.setInterval(function () {
        $('footer div').animate({
            width: '50%',
            height: '80%'
        },500,function () {
            $('footer div').animate({
                width: '100%',
                height: '100%'
            },500);
        });
    },1000);

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
