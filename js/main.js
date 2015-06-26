var $divs = $("div");

$divs.velocity(
{ opacity: 0 },
// Open an alert bo right before the animation begins
{
	begin: function () { console.log("begin!"); },
	complete: function () { console.log("completed!"); }
}
);