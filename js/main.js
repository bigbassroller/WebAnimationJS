$('.col-md-4').velocity({ 
	top: "50px", // No operator. Animate toward 50 as expected.
	left: "-50", // Negative operator. ANmate toward -50 as expected.
	width: "+=5rem", // Convert the current width value into its rem equivalent and add 5 more units.
	height: "-10rem", // Convert the current height value into its rem equivalent and subtract 10 units.
	paddingLeft: "*=2", // Double the current paddingLeft value.
	paddingRight: "/=2" // Divide the current paddingRight value into two. 
	});
