console.log('hello from script.js');
$(document).ready(function() {

    // $('.search-label').click(function(){

    //     $('.search-wrap').toggleClass('vv');
    //     $('.search-input').toggleClass('w320');
    // });

    // слайдер на главной
	$('.partners-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  // variableWidth: true,
	  arrows: false
	});
	$('.partners-prev').click(function (e){
		e.preventDefault();
		$('.partners-slider').slick('slickPrev');
		return false;
	});
	$('.partners-next').click(function (e){
		e.preventDefault();
		 $('.partners-slider').slick('slickNext');
		 return false;
	});
}); // конец document.ready