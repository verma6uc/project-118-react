
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f1ff",
          100: "#cce3ff",
          200: "#99c7ff",
          300: "#66aaff",
          400: "#338eff",
          500: "#0072ff", // Main Primary
          600: "#005bd9",
          700: "#0044b3",
          800: "#002d8c",
          900: "#001766",
        },
        secondary: {
          50: "#e6fff9",
          100: "#ccfff4",
          200: "#99ffe9",
          300: "#66ffdd",
          400: "#33ffd2",
          500: "#00e6be", // Teal
          600: "#00c099",
          700: "#009973",
          800: "#00734d",
          900: "#004c33",
        },
        accent: {
          50: "#fff8e6",
          100: "#fff1cc",
          200: "#ffe499",
          300: "#ffd666",
          400: "#ffc933",
          500: "#ffbb00", // Amber
          600: "#cc9600",
          700: "#997000",
          800: "#664b00",
          900: "#332500",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        faktum: ["Faktum", "sans-serif"],
      },
      spacing: {
        "2xs": "0.25rem", // 4px
        xs: "0.5rem", // 8px
        sm: "0.75rem", // 12px
        md: "1rem", // 16px
        lg: "1.5rem", // 24px
        xl: "2rem", // 32px
        "2xl": "3rem", // 48px
        "3xl": "4rem", // 64px
        "4xl": "6rem", // 96px
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)",
        normal: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        prominent: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
