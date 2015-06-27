$(".col-md-4").velocity("shadowIn", 1000 )
/* Usage */
$(".col-md-4")
    .velocity("transition.flipXIn", { delay: 1000 })
    // .velocity("transition.flipXOut", { delay: 1000 });
$("p").velocity({ fontSize: "28px" }, { duration: 800 });
$(".col-md-4").blast( { delimiter: "sentence" } );

$.velocity.RunSequence([
	{ elements : $("p"), properties: { fontSize: "28px" }, options: { duration: 800, sequenceQueue: false } }
	])
