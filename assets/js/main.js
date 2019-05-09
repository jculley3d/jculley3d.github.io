var nav = document.getElementById("nav-container");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("logo").style.fontSize = "2rem";
	} else {
		document.getElementById("logo").style.fontSize = "4rem";
	}
}

function toggleMenu() {
	if(nav.className == "mobile") {
		nav.className = "";
	} else {
		nav.className = "mobile";
	}
}

function scrollToContact() {
	document.querySelector('.contact').scrollIntoView({ 
	  behavior: 'smooth' 
	});
	if(nav.className == "mobile") {
		nav.className = "";
	}
}