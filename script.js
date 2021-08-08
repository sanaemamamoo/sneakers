$(function(){

// カルーセルスライダー 
//-------------------------------
  /*  $('.center').slick({
        infinite: true,
        dots: true,
        centerMode: true, //要素を中央寄せ
        centerPadding: '140px', //両サイドの見えている部分のサイズ
        autoplay: true,
        slidesToShow: 3, 
        speed: 500,
   */  //}); 

      $('.center').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              centerPadding: '50px',
              slidesToShow: 1
            }
          }
        ]
      });
/*
autoplay	true/false	自動再生
dots	true/false	ドット状のナビを表示
arrows	true/false	前/次にスライドを切り替える矢印
slidesToShow	1	表示するスライド数
slidesToScroll	1	1回で動くスライド数
*/


//ドロワー
//-------------------------------
// ハンバーガーメニューのクリックイベント
  // 解説は、「中級編：ストアサイト（インテリア）」参照
  $('.toggle_btn').on('click', function() {
    if (!$('.header').hasClass('open')) {
      $('.header').addClass('open');
    } else {
      $('.header').removeClass('open');
    }
  });

  // #maskのエリアをクリックした時にメニューを閉じる
  $('#mask').on('click', function() {
    $('.header').removeClass('open');
  });

  // リンクをクリックした時にメニューを閉じる
  $('.header-nav a').on('click', function() {
    $('.header').removeClass('open');
  });


  //❶ナビゲーションの選択
//❷選択したコンテンツへ移動する
$(function(){
  //❶ナビゲーションの選択
   //①ナビゲーションをクリック
   $("a[href^=#]:not([href=#])").click(function(){
  //クリック時の処理
  //❷選択したコンテンツへ移動する
   //②移動先のコンテンツの位置を取得
    var target = $($(this).attr("href")).offset().top;

    //④70px減らす
    target -= 80;

    //③コンテンツへスクロール
    $("html, body").animate({scrollTop : target}, 500);

    return false;
  });
});

//
//ページ内のリンクとスムーススクロール
//
jQuery('a[href^="#"]').on('click', function(){
  
  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');

  var position = 0;
  if(id !='#') {
   position = jQuery(id).offset().top - header;
  }


 jQuery('html,body').animate({
   scrollTop: position
 },
 300);
});





//フワッとfadeIn
new WOW().init();

});

