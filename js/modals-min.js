$(document).ready(function(){$("a[name=modal]").live("click",function(e){var t=$(this).attr("href"),n=$(document).height(),r=$(window).width();$("#mask").css({width:r,height:n});$("#mask").show();var i=$(window).height(),s=$(window).width();$(t).css("top",($(window).height()-$(t).height())/2+$(window).scrollTop()+"px");$(t).css("left",($(window).width()-$(t).width())/2+$(window).scrollLeft()+"px");$(t).fadeIn();e.preventDefault()});$(".window .close").click(function(e){e.preventDefault();$("#mask, .window").fadeOut()});$("#mask").click(function(e){e.preventDefault();$("#mask, .window").hide()})});