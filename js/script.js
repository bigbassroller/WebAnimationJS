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

$("#mission-statement h2")
	.html("The goal of The Acme Foundation is to enhance our capability to protect Acme from Acme.")
	.blast({ delimiter: "word" } )
		.css("opacity", 0)
		.velocity("transition.fadeIn", { 
			stagger: 50,
			complete: function() {
			 // Reverse blast
			 $("h2").blast(false);
			} 
		});

// $("div")
// 	.html("The goal of The Acme Foundation is to enhance our capability to protect Acme from Acme.")
// 	.blast({ delimiter: "word" } )
// 		.css({ opacity: 0, display: "inline-block" })
// 		.velocity("transition.perspectiveDownIn", { 
// 			stagger: 50
// 		});
// Animate the cx and x=cy coordinates of a circle
$("circle#circle").velocity( { cx: 300, cy: 300 }, { duration: 1000 } );
// Animate the fill and stoke of circle
$("circle#circle").velocity({ fill: "#ff0000", storke: "#000000" }, { duration: "slow" } );
// Animate the x and y coordinates of a rectangle
$("rect#rect").velocity( { x: 100, y: 100 }, { duration: "fast" } );
// Animate the dimensions of a rectangle
$("rect#rect").velocity( { width: 200, height: 200 }, { duration: "slow" } );
// Animate the radius of a circle
$("circle#circle").velocity({ r: 100 }, { duration: "slow" } );










