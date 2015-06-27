var fadeIn = {
	p: {
		opacity: 1,
		top: "50px"
	},
	oFast: {
		duration: 1000,
		easing: "linear"
	},
	oSlow: {
		duration: 3000,
		easing: "linear"
	}
};

$.Velocity
	.RegisterEffect("shadowIn", {
		defaultDuration: 1000,
		calls: [
			[ { opacity: 1, scale : 1 }, 0.4 ],
			[ { boxShadowBlur: 50 }, 0.6 ]
		]
	})
	.RegisterEffect("shadowOut", {
		defaultDuration: 800,
		calls: [
			// we reverse the order to mirror th "In" direction
			[ { boxShadowBlur: 50 }, 0.2 ],
			[ { opacity: 0, scale: 0 }, 0.8 ]
		]
	});
