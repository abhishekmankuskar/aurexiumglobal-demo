/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
        extend: {
                fontFamily: {
                        heading: ['Playfair Display', 'serif'],
                        body: ['Manrope', 'sans-serif'],
                },
                colors: {
                        forest: {
                                DEFAULT: '#1a472a',
                                light: '#2d6b45',
                                dark: '#143620',
                        },
                        soil: {
                                DEFAULT: '#5d4037',
                                light: '#795548',
                                dark: '#2C1810',
                        },
                        neon: '#00ff9d',
                        cream: '#f5f5f0',
                        background: 'hsl(var(--background))',
                        foreground: 'hsl(var(--foreground))',
                        card: {
                                DEFAULT: 'hsl(var(--card))',
                                foreground: 'hsl(var(--card-foreground))'
                        },
                        popover: {
                                DEFAULT: 'hsl(var(--popover))',
                                foreground: 'hsl(var(--popover-foreground))'
                        },
                        primary: {
                                DEFAULT: 'hsl(var(--primary))',
                                foreground: 'hsl(var(--primary-foreground))'
                        },
                        secondary: {
                                DEFAULT: 'hsl(var(--secondary))',
                                foreground: 'hsl(var(--secondary-foreground))'
                        },
                        muted: {
                                DEFAULT: 'hsl(var(--muted))',
                                foreground: 'hsl(var(--muted-foreground))'
                        },
                        accent: {
                                DEFAULT: 'hsl(var(--accent))',
                                foreground: 'hsl(var(--accent-foreground))'
                        },
                        destructive: {
                                DEFAULT: 'hsl(var(--destructive))',
                                foreground: 'hsl(var(--destructive-foreground))'
                        },
                        border: 'hsl(var(--border))',
                        input: 'hsl(var(--input))',
                        ring: 'hsl(var(--ring))',
                        chart: {
                                '1': 'hsl(var(--chart-1))',
                                '2': 'hsl(var(--chart-2))',
                                '3': 'hsl(var(--chart-3))',
                                '4': 'hsl(var(--chart-4))',
                                '5': 'hsl(var(--chart-5))'
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
                        'float': {
                                '0%, 100%': { transform: 'translateY(0px)' },
                                '50%': { transform: 'translateY(-20px)' }
                        },
                        'pulse-glow': {
                                '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 157, 0.1)' },
                                '50%': { boxShadow: '0 0 40px rgba(0, 255, 157, 0.3)' }
                        },
                        'count-up': {
                                from: { opacity: '0', transform: 'translateY(20px)' },
                                to: { opacity: '1', transform: 'translateY(0)' }
                        },
                        'slide-in-left': {
                                from: { opacity: '0', transform: 'translateX(-60px)' },
                                to: { opacity: '1', transform: 'translateX(0)' }
                        },
                        'slide-in-right': {
                                from: { opacity: '0', transform: 'translateX(60px)' },
                                to: { opacity: '1', transform: 'translateX(0)' }
                        },
                        'fade-up': {
                                from: { opacity: '0', transform: 'translateY(40px)' },
                                to: { opacity: '1', transform: 'translateY(0)' }
                        },
                        'scale-in': {
                                from: { opacity: '0', transform: 'scale(0.9)' },
                                to: { opacity: '1', transform: 'scale(1)' }
                        },
                },
                animation: {
                        'accordion-down': 'accordion-down 0.2s ease-out',
                        'accordion-up': 'accordion-up 0.2s ease-out',
                        'float': 'float 6s ease-in-out infinite',
                        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                        'count-up': 'count-up 0.6s ease-out forwards',
                        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
                        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
                        'fade-up': 'fade-up 0.8s ease-out forwards',
                        'scale-in': 'scale-in 0.6s ease-out forwards',
                }
        }
  },
  plugins: [require("tailwindcss-animate")],
};
