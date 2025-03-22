
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
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// New custom color palette
				airBlue: {
					DEFAULT: '#83A5C6',
					100: '#15212d',
					200: '#2a425b',
					300: '#3f6388',
					400: '#5785b2',
					500: '#83a5c6',
					600: '#9db8d2',
					700: '#b6c9dd',
					800: '#cedbe9',
					900: '#e7edf4'
				},
				jungleGreen: {
					DEFAULT: '#47A67C',
					100: '#0e2118',
					200: '#1c4231',
					300: '#2a6349',
					400: '#388362',
					500: '#47a67c',
					600: '#65bd95',
					700: '#8bcdb0',
					800: '#b2deca',
					900: '#d8eee5'
				},
				springGreen: {
					DEFAULT: '#13754C',
					100: '#04180f',
					200: '#082f1f',
					300: '#0c472e',
					400: '#0f5f3e',
					500: '#13754c',
					600: '#1eb677',
					700: '#3fe09d',
					800: '#7feabd',
					900: '#bff5de'
				},
				celadon: {
					DEFAULT: '#95D3AF',
					100: '#153322',
					200: '#2b6643',
					300: '#409965',
					400: '#64be89',
					500: '#95d3af',
					600: '#acdbc0',
					700: '#c0e5d0',
					800: '#d5eedf',
					900: '#eaf6ef'
				},
				antiFlash: {
					DEFAULT: '#E8EBED',
					100: '#293035',
					200: '#536069',
					300: '#7f909a',
					400: '#b4bdc4',
					500: '#e8ebed',
					600: '#edeff1',
					700: '#f1f3f4',
					800: '#f6f7f8',
					900: '#fafbfb'
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
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-down': {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'blur-in': {
					'0%': { filter: 'blur(12px)', opacity: '0' },
					'100%': { filter: 'blur(0)', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-out': 'fade-out 0.7s ease-out',
				'slide-up': 'slide-up 0.7s ease-out',
				'slide-down': 'slide-down 0.7s ease-out',
				'pulse-subtle': 'pulse-subtle 3s infinite ease-in-out',
				'scale-in': 'scale-in 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
				'blur-in': 'blur-in 0.7s cubic-bezier(0.16, 1, 0.3, 1)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
