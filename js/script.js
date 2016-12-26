$(document).ready(function(){
	$(".btn-reserve").addClass('animated fadeInLeft').delay(3000);
	$(".btn-menu").addClass('animated fadeInRight').delay(4000);
});

wow = new WOW(
  {
    animateClass: 'animated',
    offset:       50
  }
);
wow.init();