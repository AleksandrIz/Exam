// плавный переход вверх
$(document).ready(function(){
	$("#rocketFixed").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
        top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

// модальное окно
var contact = document.getElementById("contact");
var contactWindow = document.getElementById("contactWindow");
var contactClose = document.getElementById("contactClose");

contact.addEventListener('click', function() {
    contactWindow.style.display = "block";
});

contactClose.addEventListener('click', function() {
    contactWindow.style.display = "none";
});
