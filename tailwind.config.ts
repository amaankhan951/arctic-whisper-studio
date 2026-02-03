import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
        accent: ["Cormorant Garamond", "serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors
        frost: "hsl(var(--frost-white))",
        ice: "hsl(var(--ice-grey))",
        pine: "hsl(var(--pine-green))",
        sage: "hsl(var(--soft-sage))",
        glacier: "hsl(var(--glacier-blue-glow))",
        forest: "hsl(var(--deep-forest))",
        mist: "hsl(var(--mist))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "1.5rem",
        "3xl": "2rem",
        pill: "50px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "float-product": {
          "0%": { transform: "translateY(0px) rotateY(0deg) rotateX(2deg)" },
          "25%": { transform: "translateY(-7px) rotateY(90deg) rotateX(0deg)" },
          "50%": { transform: "translateY(-10px) rotateY(180deg) rotateX(-2deg)" },
          "75%": { transform: "translateY(-5px) rotateY(270deg) rotateX(0deg)" },
          "100%": { transform: "translateY(0px) rotateY(360deg) rotateX(2deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.45" },
        },
        "drift-cloud-1": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "drift-cloud-2": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "bob-vertical": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "accordion-up": "accordion-up 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        "fade-in": "fade-in 0.3s ease-out",
        "fade-out": "fade-out 0.3s ease-out",
        "scale-in": "scale-in 0.2s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "float-product": "float-product 9s ease-in-out infinite",
        "float-product-fast": "float-product 5s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "pulse-glow-fast": "pulse-glow 2.5s ease-in-out infinite",
        "drift-cloud-1": "drift-cloud-1 160s linear infinite",
        "drift-cloud-2": "drift-cloud-2 110s linear infinite",
        "drift-cloud-3": "drift-cloud-1 85s linear infinite",
        "bob": "bob-vertical 2s ease-in-out infinite",
      },
      backgroundImage: {
        "sky-gradient": "linear-gradient(180deg, #b8c8d8 0%, #dce5ed 40%, #eef2f5 100%)",
        "snow-ground": "linear-gradient(180deg, transparent 0%, rgba(220,228,235,0.4) 60%, #e8edf2 100%)",
        "dark-veil": "linear-gradient(180deg, rgba(12, 22, 28, 0.38) 0%, rgba(12, 22, 28, 0.25) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
