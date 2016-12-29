console.log('hello from script.js');
$(document).ready(function() {
	// переключатель для новостей
	$('.mainpage .news, .news-side .close-news').click(function(event) {
		event.preventDefault();
		$('.wrapper').toggleClass('aside-active');
		return false;
	});
    // слайдер на главной
	$('.partners-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  // variableWidth: true,
	  arrows: false,
  		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
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

     $('.loupe').on('click',function(){
        $('.header__popup-search').bPopup({
            transition: 'slideBack',
            transitionClose: 'slideIn',
			modalColor: 'hsla(180,5%,96%,.5)'
        });
        return false;
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