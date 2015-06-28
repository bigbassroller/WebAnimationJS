// $(".col-md-4").velocity("shadowIn", 1000 )
// /* Usage */
// $(".col-md-4").velocity("transition.flipXIn", { delay: 1000 })
// // .velocity("transition.flipXOut", { delay: 1000 });
// $("p").velocity({ fontSize: "28px" }, { duration: 800 });
// $(".col-md-4").blast( { delimiter: "sentence" } );

// $.Velocity.RunSequence([
// 	{ elements: $(".col-md-4"), properties: "transition.flipXIn", options: { duration: 1000 }},
// 	{ elements: $(".col-md-4"), properties: "shadowIn", options: { duration: 1000, sequenceQueue: false }},
// 	{ elements: $(".col-md-4"), properties: { fontSize: "28px" }, options: { duration: 800 }}
// ]);

// $(".col-md-4").blast( { delimiter: "sentence" } ).css("opacity", 0.5);
// $(".col-md-4").blast( { delimiter: "sentence", customClass: "myClass" } );
// $(".col-md-4").blast( { delimiter: "word", generateValueClass: true, tag: "i" } );

// $("div")
// 	.html("The goal of The Acme Foundation is to enhance our capability to protect Acme from Acme.")
// 	.blast({ delimiter: "word" } )
// 		.css({ opacity: 0, display: "inline-block" })
// 		.velocity("transition.perspectiveDownIn", { 
// 			stagger: 50
// 		});

// $("#mission-statement h2")
// 	.blast({ delimiter: "character" } ).each(function(i, element) {
// 		var adjustOpacity = 1 - i/50;
// 		element.style.opacity = adjustOpacity;
// 	})

$("#mission-statement h2")
	.blast({ delimiter: "character" } ).each(function(i, element) {
		var adjustedBlue = i*3;
		element.style.color = "rgb( 0, 0, " + adjustedBlue + ")";
	});