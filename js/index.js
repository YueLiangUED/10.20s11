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
