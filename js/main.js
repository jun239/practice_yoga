'use strict';

{
  // ページのトップに移動
  $("#pagetop").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* ページトップ処理の表示/非表示 */
  // const top = $('#container').offset().top;
  const firstBtn = $('#btnLesson').offset().top;

  $(window).scroll(function () {
    let scroll = $(this).scrollTop();

    if (scroll >= firstBtn) {
      $('#pagetop').removeClass("invisible");
      $('#pagetop').addClass("unInvisible");
    } else {
      $('#pagetop').removeClass("unInvisible");
      $('#pagetop').addClass("invisible");
    }
  })
}