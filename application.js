$(document).ready(function(){
  $(".btn1").click(function(){
    $(".recipie1").toggle(500);
  });

  $(".btn2").click(function(){
    $(".recipie2").toggle(500);
  });
  $(".toggle-color").click(function(){
    $("li").toggleClass('red');
  });
});
