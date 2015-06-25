
// Assign a variable to a jQuery element object
var $div = $("div");
// Animate the element using Velocity
$div.velocity({ opacity: 0.5 });

$('.col-md-4').velocity({ width: "500px", opacity: 1 }, { duration: 400, easing: "swing" });

$div.velocity({ opacity: 1 });

$('.col-md-4').velocity({ width: "33.3%", opacity: 1 }, { duration: 400, easing: "swing" });

//Animate with a duration of 1000ms and an easing of "ease-in-out"
$('.col-md-4').velocity({ top: 500}, 1000);
$('.col-md-4').velocity({ top: 0}, 1000);
$('.col-md-4').velocity({ top: 500}, 1000, "ease-in-out");
$('.col-md-4').velocity({ top: 0}, "ease-in-out");
$('.col-md-4').velocity({ top: 500}, 1000, function() {alert("complete.")});
$('.col-md-4').velocity({ top: 0}, "ease-in-out");

$('.col-md-4').velocity({ top: 500 }, { duration: 1000, easing: "swing", delay: 500 });

$('.col-md-4').velocity({ top: 0 }, { duration: 1000, easing: "swing", delay: 1000 });

