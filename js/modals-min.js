//Created by Ryan Burgess
//Modal Windows Script
(function(e){e("<div id='mask'></div>").appendTo("body");e(".modal").on("click",function(t){e("#modal-window").remove();var n=e(this).attr("href"),r=n;if(n.indexOf("youtube.com/embed")!==-1)r="<iframe src='"+n+"' allowfullscreen='allowfullscreen'></iframe>";else if(n.indexOf("jpg")!==-1||n.indexOf("png")!==-1)r="<img src='"+n+"'>";e("<div id='modal-window' class='window'>"+r+"<a href='#' class='close'>X</a></div>").appendTo("body");var i=e(document).height(),s=e(window).width();e("#mask").css({width:s,height:i});e("#mask").show();var o=e(window).height(),u=e(window).width();e(".window").css("top",(e(window).height()-e(".window").height())/2+e(window).scrollTop()+"px");e(".window").css("left",(e(window).width()-e(".window").width())/2+e(window).scrollLeft()+"px");e(".window").fadeIn();t.preventDefault();return!1});e("body").on("click",".window .close",function(t){t.preventDefault();e("#mask, .window").fadeOut();e(".window iframe").remove()});e("#mask").on("click",function(t){t.preventDefault();e("#mask, .window").hide()});if(e("#mask").is(":visible")){e(window).bind("resize",t);function t(t){e(".window").css("top",(e(window).height()-e(".window").height())/2+e(window).scrollTop()+"px");e(".window").css("left",(e(window).width()-e(".window").width())/2+e(window).scrollLeft()+"px");e("#mask").css({width:e(window).width(),height:e(document).height()})}}})(jQuery);