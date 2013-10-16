//Created by Ryan Burgess
//Modal Windows Script

(function ($) {
    "use strict";

    //modal windows
    $(".modal").on("click", function (e) {

        //load mask
        $("<div id='mask'></div>").appendTo("body");

        var content = $(this).attr("href");

        //if youtube video or images passed into modal
        if (content.indexOf("youtube.com/embed") !== -1) {
            content = "<iframe src='" + content + "' allowfullscreen='allowfullscreen'></iframe>";
        } else if (content.indexOf("jpg") !== -1 || content.indexOf("png") !== -1) {
            content = "<img src='" + content + "'>";
        }

        //load modal window with content passed
        $("<div id='modal-window' class='window'>" + content + "<a href='#' class='close'>X</a></div>").appendTo("body");

        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $("#mask").css({"width": maskWidth, "height": maskHeight})
                  .show();

        $(".window").css("top", ($(window).height() - $(".window").height()) / 2 + $(window).scrollTop() + "px")
                    .css("left", ($(window).width() - $(".window").width()) / 2 + $(window).scrollLeft() + "px")
                    .fadeIn();

        e.preventDefault();
        return false;
    });

    var removeItems = function () {
        $("#mask, .window").fadeOut();
        $(".window iframe").remove();
        setTimeout(function () {
            $("#mask, .window").remove();
        }, 500);
    };
    //if close button is clicked
    $("body").on("click", ".window .close", function (e) {
        //Cancel the link behavior
        e.preventDefault();
        removeItems();
    });

    //if mask is clicked
    $("body").on("click", "#mask", function (e) {
        //Cancel the link behavior
        e.preventDefault();
        removeItems();
    });

    // Function to check the current window size for responsive pages
    // Change modal window size repsonsive
    function checkWindowSize() {
        $(".window").css("top", ($(window).height() - $(".window").height()) / 2 + $(window).scrollTop() + "px")
                    .css("left", ($(window).width() - $(".window").width()) / 2 + $(window).scrollLeft() + "px");
        $("#mask").css({"width":    $(window).width(), "height": $(document).height()});
    }
    $(window).bind("resize", checkWindowSize);

}(jQuery));

