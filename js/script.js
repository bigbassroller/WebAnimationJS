// $(".col-md-4")
// .velocity(fadeIn.p, fadeIn.o.fast)
// .velocity(fadeOut.p, fadeIn.o.slow);
// // $(".col-md-4").velocity(fadeIn.p, fadeIn.o.slow);
var loadingSequence = [
	{ e: $(".foo"), p: { translateX: 100, opacity: 1 }, o: { duration: 1000 } },
	{ e: $(".bar"), p: { translateX: 200, opacity: 1 }, o: { duration: 1000 } },
	{ e: $(".ski"), p: { translateX: 300, opacity: 1 }, o: { duration: 1000 } }

];

$.Velocity.RunSequence(loadingSequence);