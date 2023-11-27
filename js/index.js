$(document).ready(function () {
  // 點擊btn
  $(".menuBtn").click(function () {
    $(".menuBtn").hide();
    $(".menuBtnClose").show();
    $(".menu").toggle();
  })

  // 點擊btnClose
  $(".menuBtnClose").click(function () {
    $(".menuBtn").show();
    $(".menuBtnClose").hide();
    $(".menu").toggle();
  })

})


