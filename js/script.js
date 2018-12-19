// плавныe скролы
$(document).ready(function(rocketScroll){
	$("#rocketFixed").on("click","a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
        top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(document).ready(function(navScroll){
	$("#nav").on("click","a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
        top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(document).ready(function(navResizeScroll){
	$("#nav-resize").on("click","a", function (event) {
		event.preventDefault();
		var id = $(this).attr('href'),
        top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

// модальное окно
var contact = document.getElementById("contact");
var contactWindow = document.getElementById("contactWindow");
var contactClose = document.getElementById("contactClose");
var contact__resise = document.getElementById("contact__resize");

contact.addEventListener('click', function() {
    contactWindow.style.display = "block";
});

contact__resize.addEventListener('click', function() {
    contactWindow.style.display = "block";
});

contactClose.addEventListener('click', function() {
    contactWindow.style.display = "none";
});

// слайдер
jQuery(document).ready(function(circleSlider) {
    function htmSlider() {
		var slideWrap = jQuery('.slide-wrap');
        var nextLink = jQuery('.next-slide');
        var prevLink = jQuery('.prev-slide');
		var is_animate = false;
		var slideWidth = jQuery('.slide-wrap__item').outerWidth();
		var newLeftPos = slideWrap.position().left - slideWidth;

        nextLink.click(function() {
            if (!slideWrap.is(':animated')) {
				slideWrap.animate({ left: newLeftPos }, 500, function() {
                    slideWrap
                        .find('.slide-wrap__item:first')
                        .appendTo(slideWrap)
                        .parent()
                        .css({ 'left': 0 });
                });
			}
        });

        prevLink.click(function() {
            if (!slideWrap.is(':animated')) {
				slideWrap
                    .css({'left': newLeftPos })
                    .find('.slide-wrap__item:last')
                    .prependTo(slideWrap)
                    .parent()
                    .animate({ left: 0 }, 500);
				}
        });
	}
    htmSlider();
});