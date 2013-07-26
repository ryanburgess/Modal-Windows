//Created by Ryan Burgess
//Modal Windows Script

(function($) {
    "use strict";

    //load mask
    $("<div id='mask'></div>").appendTo("body");
    
    //modal windows
    $('.modal').on("click", function(e) {
        //remove existing modal window
        $("#modal-window").remove();

        var content = $(this).attr('href');
        var fullContent = content;

        //if youtube video or images passed into modal
        if(content.indexOf("youtube.com/embed") !== -1){
            fullContent = "<iframe width='560' height='315' src='"+ content +"' allowfullscreen='allowfullscreen'></iframe>";
        }else if(content.indexOf("jpg") !== -1 || content.indexOf("png") !== -1){
            fullContent = "<img src='"+ content +"'>";
        }

        //load modal window with content passed
        $("<div id='modal-window' class='window'>"+ fullContent +"<a href='#' class='close'>X</a></div>").appendTo("body");

        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $("#mask").css({"width":maskWidth,"height":maskHeight});

        $("#mask").show();   

        var winH = $(window).height();
        var winW = $(window).width();

        $(".window").css("top", ( $(window).height() - $(".window").height() ) / 2+$(window).scrollTop() + "px");
        $(".window").css("left", ( $(window).width() - $(".window").width() ) / 2+$(window).scrollLeft() + "px");

        $(".window").fadeIn();

        e.preventDefault();
        return false;
    });
    
    //if close button is clicked
    $("body").on("click", ".window .close", function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').fadeOut();
        $(".window iframe").remove();
    });

    //if mask is clicked
    $("#mask").on("click", function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $("#mask, .window").hide();
    });
    
}(jQuery));

