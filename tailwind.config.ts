
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				rodbez: {
					50: '#effef9',
					100: '#d7fcee',
					200: '#b2f6dd',
					300: '#79ebcb',
					400: '#3fd8b1',
					500: '#1abe97',
					600: '#0f9b7b',
					700: '#0c7d65',
					800: '#0d6353',
					900: '#0e5246',
				},
				auburn: {
					50: '#fef2f2',
					100: '#ffe1e1',
					200: '#ffc9c9',
					300: '#ffa2a2',
					400: '#fd6c6c',
					500: '#f43f3f',
					600: '#e12222',
					700: '#bc1919',
					800: '#9b1919',
					900: '#811c1c',
				},
				premium: {
					gold: '#d4af37',
					silver: '#c0c0c0',
					black: '#1a1a1a',
					charcoal: '#36454f',
					navy: '#001f3f',
					cream: '#fffdd0',
					slate: '#708090',
					sand: '#f5f5dc',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'car-ride': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100vw)' }
				},
				'bounce-small': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'rotate-logo': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'scale-up': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'pan-background': {
					'0%': { backgroundPosition: '0% 0%' },
					'100%': { backgroundPosition: '100% 0%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'car-ride': 'car-ride 10s linear infinite',
				'bounce-small': 'bounce-small 2s ease-in-out infinite',
				'rotate-logo': 'rotate-logo 5s linear infinite',
				'float': 'float 6s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'scale-up': 'scale-up 0.5s ease-out forwards',
				'pan-background': 'pan-background 20s linear infinite alternate'
			},
			backgroundImage: {
				'premium-gradient': 'linear-gradient(135deg, #0f9b7b 0%, #1abe97 50%, #3fd8b1 100%)',
				'premium-gold': 'linear-gradient(135deg, #b8860b 0%, #d4af37 50%, #ffd700 100%)',
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)',
				'card-gradient': 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
				'hero-gradient': 'linear-gradient(135deg, #0c7d65 0%, #0f9b7b, #1abe97)',
			},
			boxShadow: {
				'premium': '0 10px 30px -10px rgba(0, 0, 0, 0.3)',
				'premium-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.4)',
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Playfair Display', 'serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
