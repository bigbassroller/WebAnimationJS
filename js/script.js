var loadingSequence = [
	{ e: $(".foo"), p: { translateX: 100, opacity: 1 }, o: fadeIn.oSlow},
	{ e: $(".bar"), p: { translateX: 200, opacity: 1 }, o: fadeIn.oSlow},
	{ e: $(".ski"), p: { translateX: 300, opacity: 1 }, o: fadeIn.oSlow}

];

$.Velocity.RunSequence(loadingSequence);