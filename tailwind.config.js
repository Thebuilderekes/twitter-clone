module.exports = {
	mode: "jit",
	content: [
		"./index.html",
		"./src/**/*.{html,js}",
		"./components/**/*.{html,js}",
		"./pages/**/*.{html,js}",
	],
	theme: {
		screens: {
			xs: "320px",
			// => @media (min-width: 640px) { ... }
		},
	},
};
