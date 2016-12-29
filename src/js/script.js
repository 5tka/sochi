console.log('hello from script.js');
$( document ).ready(function() {

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