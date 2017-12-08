$(window).scroll(function(){
	const st = $(this).scrollTop();
	if (st >= 500 ) {
		var valDeux = (st/3)-400; 
		var valTois = -((st/3)-600);
		var valQuatre = -((st/4)-700);
		var valCinq = -((st/4)-900);

		$(".box").css({"position":"fixed"});
		$(".box").addClass("trans");

		if (valDeux >= -100 && valDeux <=0) {
			$(".deux").css({"display":"flex", "transform":"translate3d("+valDeux+"%, 0, 0)"});
		}else if (valDeux < -100) {
			$(".deux").css({"display":"flex", "transform":"translate3d(-100%, 0, 0)"});
		} else if (valDeux > 0) {
			$(".deux").css({"display":"flex", "transform":"translate3d(0, 0, 0)"});
		}else {
			$(".deux").css({"display":"none"});
		};

		if (valTois <= 100 && valTois >=0) {
		$(".trois").css({"display":"flex", "transform":"translate3d("+valTois+"%, 0, 0)"});
		} else if ( valTois > 100) {
			$(".trois").css({"display":"flex", "transform":"translate3d(100%, 0, 0)"});
		} else if ( valTois < 0) {
			$(".trois").css({"display":"flex", "transform":"translate3d( 0, 0, 0)"});
		}else{
			$(".trois").css({"display":"none"});
		};

		if (valQuatre <= 100 && valQuatre >=0) {
			$(".quatre").css({"display":"flex", "transform":"translate3d( 0,"+valQuatre+"%, 0)"});
		}else if (valQuatre > 100) {
			$(".quatre").css({"display":"flex", "transform":"translate3d( 0, 100%, 0)"});
		} else if (valQuatre < 0) {
			$(".quatre").css({"display":"flex", "transform":"translate3d(0, 0, 0)"});
		}else {
			$(".quatre").css({"display":"none"});
		};

		if (valCinq <= 100 && valCinq >=0) {
			$(".cinq").css({"display":"flex", "transform":"translate3d( 0,"+valCinq+"%, 0)"});
		}else if (valCinq > 100) {
			$(".cinq").css({"display":"flex", "transform":"translate3d( 0, 100%, 0)"});
		} else if (valCinq < 0) {
			$(".cinq").css({"display":"flex", "transform":"translate3d(0, 0, 0)"});
		}else {
			$(".cinq").css({"display":"none"});
		};

	}else{
		$(".box").css({"position":"relative"});
		$(".box").removeClass("trans");
	};
	console.log(st);
	// console.log("valDeux", valDeux);
	// console.log("valTois", valTois);
	// console.log("valQuatre", valQuatre);
	console.log("valCinq", valCinq);
});