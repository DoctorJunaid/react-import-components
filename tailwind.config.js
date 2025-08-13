/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                muted: {
                  DEFAULT: 'hsl(var(--muted))',
                  foreground: 'hsl(var(--muted-foreground))'
                },
                border: 'hsl(var(--border))'
              },
            fontFamily: {
                sans: ['Oxanium', 'system-ui', 'sans-serif'],
                mono: ['Source Code Pro', 'ui-monospace', 'SFMono-Regular', 'SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
            },
            letterSpacing: {
                tighter: '-0.35em',
            },
        },
    },
}