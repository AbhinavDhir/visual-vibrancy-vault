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
					glow: 'hsl(var(--primary-glow))',
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
					glow: 'hsl(var(--accent-glow))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					glass: 'hsl(var(--card-glass))',
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
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-bg': 'var(--gradient-bg)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-map': 'var(--gradient-map)'
			},
			boxShadow: {
				'glow-primary': 'var(--shadow-glow-primary)',
				'glow-secondary': 'var(--shadow-glow-secondary)',
				'glow-accent': 'var(--shadow-glow-accent)',
				'card': 'var(--shadow-card)',
				'float': 'var(--shadow-float)',
				'ping': 'var(--shadow-ping)'
			},
			backdropBlur: {
				'glass': '12px'
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
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'ping-pulse': {
					'0%': { boxShadow: 'var(--shadow-ping)', transform: 'scale(1)' },
					'50%': { boxShadow: '0 0 0 20px hsl(60 100% 50% / 0)', transform: 'scale(1.05)' },
					'100%': { boxShadow: 'var(--shadow-ping)', transform: 'scale(1)' }
				},
				'sonar-wave': {
					'0%': { transform: 'scale(1)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				},
				'avatar-pulse': {
					'0%, 100%': { boxShadow: 'var(--shadow-glow-primary)' },
					'50%': { boxShadow: '0 0 30px hsl(195 100% 50% / 0.6), 0 0 60px hsl(195 100% 50% / 0.3)' }
				},
				'neon-glow': {
					'0%, 100%': { filter: 'brightness(1) drop-shadow(0 0 10px currentColor)' },
					'50%': { filter: 'brightness(1.2) drop-shadow(0 0 20px currentColor)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'scale-in': 'scale-in 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
				'ping-pulse': 'ping-pulse 2s ease-in-out infinite',
				'sonar-wave': 'sonar-wave 2s ease-out',
				'avatar-pulse': 'avatar-pulse 3s ease-in-out infinite',
				'neon-glow': 'neon-glow 2s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
