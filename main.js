$(document).ready(function () {
    $("#img1").mouseover(function(){
        $(this).animate({opacity: 0.5}, function(){
            $(this).mouseout(function(){
                $(this).animate({opacity: 1});
                $("#img1-text").animate({opacity: 0.5});
            });
        });
        $("#img1-text").animate({opacity: 1}, function(){
            $(this).css({color: "white"});
        });
    });
    $("#img2").mouseover(function(){
        $(this).animate({opacity: 0.5}, function(){
            $(this).mouseout(function(){
                $(this).animate({opacity: 1});
                $("#img2-text").animate({opacity: 0.5});
            });
        });
        $("#img2-text").animate({opacity: 1}, function(){
            $(this).css({color: "white"});
        });
    });
    $("#img3").mouseover(function(){
        $(this).animate({opacity: 0.5}, function(){
            $(this).mouseout(function(){
                $(this).animate({opacity: 1});
                $("#img3-text").animate({opacity: 0.5});
            });
        });
        $("#img3-text").animate({opacity: 1}, function(){
            $(this).css({color: "white"});
        });
    });

    $("#img4").mouseover(function(){
        $(this).animate({opacity: 0.5}, function(){
            $(this).mouseout(function(){
                $(this).animate({opacity: 1});
                $("#img4-text").animate({opacity: 0.5});
            });
        });
        $("#img4-text").animate({opacity: 1}, function(){
            $(this).css({color: "white"});
        });
    });
});
