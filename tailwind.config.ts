import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Flattened brand colors for v4 compatibility
        cyan: "#00BCD4",
        "cyan-light": "#4DD0E1",
        "cyan-dark": "#0097A7",
        charcoal: "#2C2C2C",
        "charcoal-light": "#3A3A3A",
        "charcoal-dark": "#1A1A1A",
        navy: "#0A1929",
        "navy-light": "#1E3A5F",
        "navy-dark": "#020814",

        // Explicit gray scale for Tailwind v4
        gray: {
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
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
