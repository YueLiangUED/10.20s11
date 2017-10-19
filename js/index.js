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

    //参数 总数字符串
    count('1232');
    //计数器
    //@param string
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
