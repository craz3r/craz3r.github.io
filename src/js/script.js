$(document).ready(function (){
	var w = $('.fix').outerWidth();
	$('.contact').outerWidth(w);
	var max = 0;
	$('.item__text').each(function(){
		if($(this).height() > max) {
			max = $(this).height();
		}
	});

	$('.item__text').each(function(){
		$(this).height(max);
	});
});

$(window).resize(function(){
	var w = $('.fix').outerWidth();
	$('.contact').outerWidth(w);
});