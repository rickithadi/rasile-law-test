/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "brand-1": "#1e3a8a", // Professional navy blue
        "brand-2": "#fbbf24", // Gold accent
        "brand-3": "#94a3b8", // Light gray for text
        "primary": "#1e3a8a",
        "secondary": "#374151",
        "accent": "#fbbf24"
},
      spacing: {
      "spacing-1": "4px",
      "spacing-2": "8px",
      "spacing-3": "12px",
      "spacing-4": "16px",
      "spacing-5": "20px",
      "spacing-6": "24px",
      "spacing-7": "32px",
      "spacing-8": "40px",
      "spacing-9": "48px",
      "spacing-10": "64px"
},
      fontFamily: {
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      [
      "light",
      "dark",
      "cupcake",
      "emerald"
],
      {
        "custom": {
        "primary": "#1e3a8a",
        "secondary": "#374151", 
        "accent": "#fbbf24",
        "neutral": "#1f2937",
        "base-100": "#ffffff",
        "base-200": "#f8fafc",
        "base-300": "#e2e8f0",
        "info": "#0ea5e9",
        "success": "#059669",
        "warning": "#d97706",
        "error": "#dc2626"
}
      }
    ],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root",
  },
}
