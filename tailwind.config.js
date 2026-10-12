/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        backgroundPrimary: "#FFFFFF",
        backgroundSecondary: "#F7F7F7",
        surface: "#FFFFFF",
        surfaceSecondary: "#F7F7F7",
        textPrimary: "#111111",
        textSecondary: "#666666",
        accentOrange: "#FF8500",
        accentOrangeHover: "#E67700",
        cardBorder: "#EAEAEA",
        buttonBg: "#111111",
        buttonText: "#FFFFFF",
        badgeBg: "#F4F4F4",
      },
      fontFamily: {
        sans: ["'Inter'", "'Geist'", "'Manrope'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["'Inter'", "'Geist'", "'Manrope'", "sans-serif"],
        editorial: ["'Inter'", "'Helvetica Neue'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.04)",
        card: "0 8px 30px -4px rgba(0, 0, 0, 0.06)",
        cardHover: "0 20px 40px -6px rgba(0, 0, 0, 0.10)",
        orangeGlow: "0 8px 25px -4px rgba(255, 133, 0, 0.35)",
        darkCard: "0 14px 40px -10px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    }
  },
  plugins: []
};
