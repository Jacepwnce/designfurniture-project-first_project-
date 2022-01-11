new Swiper ('.mySlider', {
    direction:'vertical',
    autoplay: {
      delay:5000
    },
    pagination : {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
			return '<span class="' + className + '"> 0' + (index + 1) + '</span>';
		},
    },
    
});
//первый слайдер
new Swiper ('.mySlider-2', {
    loop: true,
	autoplay: {
		delay: 10000
	 },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
});
// второй слайдер




//третий слайдер



//бурег-меню
$(document).ready(function(){
    $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active');
    });
});
