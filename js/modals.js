$(document).ready(function(){
	//modal windows
	$('a[name=modal]').live("click", function(e) {
		var id = $(this).attr('href');

        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#mask').css({'width':maskWidth,'height':maskHeight});

        $('#mask').show();   

        var winH = $(window).height();
        var winW = $(window).width();

		$(id).css("top", ( $(window).height() - $(id).height() ) / 2+$(window).scrollTop() + "px");
		$(id).css("left", ( $(window).width() - $(id).width() ) / 2+$(window).scrollLeft() + "px");

        $(id).fadeIn();

		e.preventDefault();
		     
	});
	
	//if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').fadeOut();
    });

	//if mask is clicked
	$('#mask').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').hide();
    });
});


