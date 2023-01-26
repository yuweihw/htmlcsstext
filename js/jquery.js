$(document).ready(function () {

    //菜單選項
    $('.productdescription').hover(function () {
            // over
            $('.productdescription-open').slideDown();
        }, function () {
            // out
            $('.productdescription-open').slideUp();
        }
    );

    //課程動畫
    $('.rwd a').hover(function () {
            // over
            $(this).addClass('animate__animated animate__swing animate__infinite');
        }, function () {
            // out
            $(this).removeClass('animate__animated animate__swing animate__infinite');
        }
    );
    //課程動畫
    $('.html a').hover(function () {
            // over
            $(this).addClass('animate__animated animate__swing animate__infinite');
        }, function () {
            // out
            $(this).removeClass('animate__animated animate__swing animate__infinite');
        }
    );
    //課程動畫
    $('.jquery a').hover(function () {
            // over
            $(this).addClass('animate__animated animate__swing animate__infinite');
        }, function () {
            // out
            $(this).removeClass('animate__animated animate__swing animate__infinite');
        }
    );

    //製作一個可以立刻至頂的功能
    $('.top a').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({scrollTop:0},1000); //3000=秒數，scrollTop:0=至頂
    });
    function showBtnCondition() {  //當移動到某高度時顯示
        if ($(this).scrollTop() > 500) {
          $('.top').fadeIn();
            } else {
             $('.top').fadeOut();
           }
         }
    $(window).scroll(showBtnCondition);
});

