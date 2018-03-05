document.body.onload = function(){
 	setTimeout(function(){
 		var preloader = document.getElementById('pagePreloader');
 		if (!preloader.classList.contains('.done')){
 			$('#pagePreloader').addClass("done");
 			console.log('-_-');
 		}
 	}, 400);
};
$(window).scroll(function(){
	const st = $(this).scrollTop();
	if (st >= 500 ) {
		var valDeux = (st/3)-400; // L > R
		var valTois = -((st/3)-600); // R > L
		var valQuatre = (st/4)-700; // Up > Down
		var valCinq = -((st/4)-900); // Down > Up

		// var TestFieldHeight = $("html").height();
		// $("#testfield").css({"height":+TestFieldHeight+"px"});
		// console.log("H",TestFieldHeight);

		$(".box").css({"position":"fixed"});
		$(".box").addClass("trans");

		if (valDeux >= -100 && valDeux <=0) {
			$(".deux").css({"display":"flex", "transform":"translate3d("+valDeux+"%, 0, 0)"});
		} else if (valDeux < -100) {
			$(".deux").css({"display":"flex", "transform":"translate3d(-110%, 0, 0)"});
		} else if (valDeux > 0) {
			$(".deux").css({"display":"flex", "transform":"translate3d(0, 0, 0)"});
		};

		if (valTois <= 100 && valTois >=0) {
		$(".trois").css({"display":"flex", "transform":"translate3d("+valTois+"%, 0, 0)"});
		} else if ( valTois > 100) {
			$(".trois").css({"display":"flex", "transform":"translate3d(110%, 0, 0)"});
		} else if ( valTois < 0) {
			$(".trois").css({"display":"flex", "transform":"translate3d( 0, 0, 0)"});
		};

		if (valQuatre >= -100 && valQuatre <=0) {
			$(".quatre").css({"display":"flex", "transform":"translate3d( 0, "+valQuatre+"%, 0)"});
		} else if (valQuatre < -100) {
			$(".quatre").css({"display":"flex", "transform":"translate3d( 0, -110%, 0)"});
		} else if (valQuatre > 0) {
			$(".quatre").css({"display":"flex", "transform":"translate3d(0, 0, 0)"});
		};

		if (valCinq <= 100 && valCinq >=0) {
			$(".cinq").css({"display":"flex", "transform":"translate3d( 0,"+valCinq+"%, 0)"});
		} else if (valCinq > 100) {
			$(".cinq").css({"display":"flex", "transform":"translate3d( 0, 110%, 0)"});
		} else if (valCinq < 0) {
			$(".cinq").css({"display":"flex", "transform":"translate3d(0, 0, 0)"});
		};

	} else {
		$(".box").css({"position":"relative"});
		$(".box").removeClass("trans");
	};
	// console.log(st);
	// console.log("valDeux", valDeux);
	// console.log("valTois", valTois);
	// console.log("valQuatre", valQuatre);
	// console.log("valCinq", valCinq);
});