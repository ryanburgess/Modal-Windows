//Created by Ryan Burgess
//Modal Windows Script

(function ($) {
    "use strict";

    //modal windows
    $(".modal").on("click", function (e) {

        //load mask
        $("<div id='mask'></div>").appendTo("body");

        //remove existing modal window
        $("#modal-window").remove();

        var content = $(this).attr("href");
        var fullContent = content;

        //if youtube video or images passed into modal
        if(content.indexOf("youtube.com/embed") !== -1){
            fullContent = "<iframe src='"+ content +"' allowfullscreen='allowfullscreen'></iframe>";
        }else if(content.indexOf("jpg") !== -1 || content.indexOf("png") !== -1){
            fullContent = "<img src='"+ content +"'>";
        }

        //load modal window with content passed
        $("<div id='modal-window' class='window'>"+ fullContent +"<a href='#' class='close'>X</a></div>").appendTo("body");

        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $("#mask").css({"width":maskWidth,"height":maskHeight});

        $("#mask").show();

        $(".window").css("top", ( $(window).height() - $(".window").height() ) / 2+$(window).scrollTop() + "px");
        $(".window").css("left", ( $(window).width() - $(".window").width() ) / 2+$(window).scrollLeft() + "px");

        $(".window").fadeIn();

        e.preventDefault();
        return false;
    });

    function removeItems() {
        setTimeout(function () {
            $("#mask, .window").remove();
        }, 500);
    }
    
    //if close button is clicked
    $("body").on("click", ".window .close", function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $("#mask, .window").fadeOut();
        $(".window iframe").remove();
        removeItems();
    });

    //if mask is clicked
    $("body").on("click", "#mask", function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $("#mask, .window").hide();
        $(".window iframe").remove();
        removeItems();
    });

    // Function to check the current window size for responsive pages
    // Change modal window size repsonsive
    function checkWindowSize() {
        $(".window").css("top", ( $(window).height() - $(".window").height() ) / 2+$(window).scrollTop() + "px");
        $(".window").css("left", ( $(window).width() - $(".window").width() ) / 2+$(window).scrollLeft() + "px");
        $("#mask").css({"width":$(window).width(),"height":$(document).height()});
    }
    $(window).bind("resize", checkWindowSize);
    
    
}(jQuery));

