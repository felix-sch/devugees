$(document).ready(function(){
    $(".btn1").click(function(){
      $(".recipie1").toggle(500);
    });

    $(".btn2").click(function(){
        $(".recipie2").toggle(500);
    });
    $(".remove").click(function(){
        $("li").toggleClass('red');
    });
});
