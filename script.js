$(document).ready(function(){
    $(".img").click(function(){
        $(".img").hide();
        $(".showing").show();
    });
    $(".showing").click(function(){
        $(".showing").hide();
        $(".img").show();
    });
    $(document).ready(function(){
        $("showing").hover(function(){
          $(this).css("background-color", "yellow");
          }, function(){
          $(this).css("background-color", "pink");
        });
      }); 

