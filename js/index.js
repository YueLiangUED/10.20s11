(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //顶部跑马灯
    $.fn.textScroll = function () {
        var speed = 60, flag = null, tt, that = $(this), child = that.children();
        var p_w = that.width(), w = child.width();
        child.css({left: p_w - 80});
        console.log(w);
        var t = (w + p_w) / speed * 800;
        function play(m) {
            var tm = m == undefined ? t : m;
            child.animate({left: -w}, tm, "linear", function () {
                $(this).css("left", p_w);
                play();
            });
        }
        play();
    }
    $('.topTextWrap').textScroll();

    //首页我的奖品按钮
    $('#homeMyJpBtn').on('click',function () {
        window.location.href = 'index_02.html';
    });
    //活动说明按钮
    $('#hdBtn').on('click',function () {
        showTc_5();
    });
    //活动说明弹窗关闭按钮（X）
    $('#closeTc_5').on('click',function () {
        hideTc_5();
    });
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

    //弹窗显示
    var $tc_1 = $('#tc-1'),
        $tc_2 = $('#tc-2'),
        $tc_3 = $('#tc-3'),
        $tc_4 = $('#tc-4'),
        $tc_5 = $('#tc-5');
    //没有奖品弹窗显示
    function showTc_1() {
        $tc_1.fadeIn();
        showMask();
    }
    //没有奖品弹窗隐藏
    function hideTc_1() {
        $tc_1.fadeOut();
        hideMask();
    }
    //签到成功弹窗显示
    function showTc_2() {
       $tc_2.fadeIn();
       showMask();
    }
    //签到成功弹窗隐藏
    function showTc_2() {
        $tc_2.fadeOut();
        hideMask();
    }
    //中奖弹窗显示
    function showTc_3() {
        $tc_3.fadeIn();
        showMask();
    }
    //中奖弹窗隐藏
    function hideTc_3() {
        $tc_3.fadeOut();
        hideMask();
    }
    //签到弹窗显示
    function showTc_4() {
        $tc_4.fadeIn();
        showMask();
    }
    //签到弹窗隐藏
    function hideTc_4() {
        $tc_4.fadeOut();
        hideMask();
    }
    //活动规则弹窗显示
    function showTc_5() {
        $tc_5.fadeIn();
        showMask();
    }
    //活动规则弹窗隐藏
    function hideTc_5() {
        $tc_5.fadeOut();
        hideMask();
    }
    // tab切换
    $('.tab-btn li').on('click', function () {
        $('.tab-btn li').removeClass('act');
        $(this).addClass('act');
        var thisIndex = $(this).index(),
            thisTabBody = $('.tab-body')[thisIndex];
        $('.tab-body').hide();
        $(thisTabBody).show();
    });

    $('.add-btn span').on('click', function () {
        $('.modal').show();
        showMask();
    });

    $('#modal-cancel').on('click', function () {
        $('.modal').hide();
        hideMask();
    });

    $('#modal-submit').on('click', function () {
        var nameValue  = $('#name').val();
        var phoneValue  = $('#telephone').val();
        var placeValue  = $('#place').val();
        if (nameValue == '' || phoneValue == '' || placeValue == '') {
            alert('请将表单填写完整后提交');
            return false;
        }
        var str = '<div class="tab-inf"><div class="name"><span>'+ nameValue +'</span><span>'+ phoneValue +'</span></div><div class="address">'+ placeValue +'</div></div>';
        $(str).prependTo('.tab_02.tab-body');
        $('.modal').hide();
        hideMask();
    });
});
