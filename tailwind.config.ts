const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			rotate: {
				'15': '15deg',
				'30': '30deg',
				'60': '60deg',
				'90': '90deg',
				'180': '180deg',
				'360': '360deg',
			  },
			  animation: {
				rotate: "rotate 10s linear infinite",
			  },
			  keyframes: {
				rotate: {
				  "0%": { transform: "rotate(0deg) scale(10)" },
				  "100%": { transform: "rotate(-360deg) scale(10)" },
				},
			  },
		},
		fontSize: {
			xs: ['12px', '18px'],
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			md: ['18px', '26px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
			xxl: ['32px', '36px'],
		},
		borderRadius: {
			'none': '0',
			'sm': '2px',
			DEFAULT: '4px',
			'md': '6px',
			'lg': '10px',
			'full': '9999px',
			'large': '12px',
			'half': '50px',
		},
		maxWidth: {
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'5/6': '83.333333%',
			'7/8': '87.5%',
			'1/3': '30%',
			'2/3': '70%',
			'full': '100%'
		},
	},
	plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}
