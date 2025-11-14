/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx,vue,js,jsx,html}',
  ],
  theme: {
    extend: {
    //  colors: {
    //   background: "oklch(var(--background) / <alpha-value>)",
    //   foreground: "oklch(var(--foreground) / <alpha-value>)",
    //   primary: "oklch(var(--primary) / <alpha-value>)",
    //   "primary-foreground": "oklch(var(--primary-foreground) / <alpha-value>)",
    //   secondary: "oklch(var(--secondary) / <alpha-value>)",
    //   "secondary-foreground": "oklch(var(--secondary-foreground) / <alpha-value>)",
    //   muted: "oklch(var(--muted) / <alpha-value>)",
    //   "muted-foreground": "oklch(var(--muted-foreground) / <alpha-value>)",
    //   destructive: "oklch(var(--destructive) / <alpha-value>)",
    //   "destructive-foreground": "oklch(var(--destructive-foreground) / <alpha-value>)",
    //   border: "oklch(var(--border) / <alpha-value>)",
    //   accent: "oklch(var(--accent) / <alpha-value>)",
    //   "accent-foreground": "oklch(var(--accent-foreground) / <alpha-value>)",
    // },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '2.5rem',
          lg: '2.5rem',
        },
        screens: {
          'xl': '1200px',
          '2xl': '1440px',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        xs: '0 10px 15px 0 rgba(211, 192, 214, 0.07)',
        sm: '0 8px 16px 0 rgba(62, 19, 77, 0.07)',
        md: '0 15px 30px 0 rgba(62, 19, 77, 0.09)',
        lg: '0 10px 30px 0 rgba(62, 19, 77, 0.47)',
        input: 'inset 0 4px 5px 0 rgba(33,1,38,0.03)',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
