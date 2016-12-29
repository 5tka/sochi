console.log('hello from script.js');
$(document).ready(function() {

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

    $('.search-label').click(function(){

        $('.search-wrap').toggleClass('vv');
        $('.search-input').toggleClass('w320');

    });

    $('#nav-icon').click(function(){
        $('.navigation-list').addClass('navigation--active');
        $('.header__top-line').addClass('blur');
	});
    $('.close-btn-mnu').click(function(){
        $(this).toggleClass('dn');
        $('.navigation-list').removeClass('navigation--active');
        $('.header__top-line').removeClass('blur');
    });


}); // конец document.ready