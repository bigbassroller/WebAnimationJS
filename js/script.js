// $.Velocity.RunSequence([
// 	{ elements: $(".foo"), properties: { translateX: 100 }, options: { duration: 1000 }},
// 	{ elements: $(".bar"), properties: { translateX: 200 }, options: { duration: 1000, sequenceQueue: false }},
// 	{ elements: $(".ski"), properties: { translateX: 300 }, options: { duration: 1000 }}
// ]);
$(".col-md-4").velocity("shadowIn").velocity("shadowOut");