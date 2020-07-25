$(function(){
  $('a[href^=#]').click(function(){
    var speed = 600;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
  $("html, body").animate({scrollTop:position}, speed, "swing");
return false;
  });
});

$(function(){
$(".btn-gnavi").on("click", function(){
    // ハンバーガーメニューの位置を設定
    var rightVal = 0;
    if($(this).hasClass("open")) {
        // 位置を移動させメニューを開いた状態にする
        rightVal = -300;
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $(this).removeClass("open");
    } else {
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $(this).addClass("open");
    }

    $("#global-navi").stop().animate({
        right: rightVal
    }, 200);
});
});

$(function(){
  $('#global-navi a[href]').on('click', function(event) {
$('.btn-gnavi').trigger('click');
});

});
