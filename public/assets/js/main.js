// Efecto menu scroll


window.onscroll = function() {
	var navbar = document.getElementById("navbar");
	var logo = document.getElementById("logo-header");
	var width = window.innerWidth;
	 
	if (window.pageYOffset == 0) {
		if(width < 482){
			navbar.style.background = "none";
			logo.style.width = "80px";
			logo.style.height = "80px";
			navbar.style.padding = "3rem 15px";			
		}else{
			navbar.style.background = "none";
			navbar.style.padding = "2em 3em";
			logo.style.width = "90px";
			logo.style.height = "90px";
			navbar.style.alignItems = "flex-start";			
		}
	}else{
		if(width < 482){
			logo.style.width = "70px";
			logo.style.height = "70px";
			navbar.style.padding = "0.5rem 15px";
			navbar.style.background = "#1e1e1e";	
		}else{
			navbar.style.background = "#1e1e1e";
			navbar.style.padding = "0.5rem 60px";
			navbar.style.alignItems = "center";
			logo.style.width = "45px";
			logo.style.height = "45px";
		}
	}
}

// header slider

$(document).ready(function(){
	$('.slide_container').slick({
	    autoplay: true,
	    autoplaySpeed: 5000,
		asNavFor: '.slide-nav',
		focusOnSelect: true,
		arrows: false
	});

	$('.slide-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slide_container',
		focusOnSelect: true
	});

	// Gallery slider

	// $('.g_slider').slick({
		
	// })
});
	