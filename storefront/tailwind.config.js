const path = require("path")

module.exports = {
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      colors: {
  accent: {
    brand: 'hsl(var(--accent-brand))',
    main: {
      '000': 'hsl(var(--accent-main-000))',
      '100': 'hsl(var(--accent-main-100))',
      '200': 'hsl(var(--accent-main-200))',
      '900': 'hsl(var(--accent-main-900))',
    },
    pro: {
      '000': 'hsl(var(--accent-pro-000))',
      '100': 'hsl(var(--accent-pro-100))',
      '200': 'hsl(var(--accent-pro-200))',
      '900': 'hsl(var(--accent-pro-900))',
    },
    secondary: {
      '000': 'hsl(var(--accent-secondary-000))',
      '100': 'hsl(var(--accent-secondary-100))',
      '200': 'hsl(var(--accent-secondary-200))',
      '900': 'hsl(var(--accent-secondary-900))',
    },
  },

  bg: {
    '000': 'hsl(var(--bg-000))',
    '100': 'hsl(var(--bg-100))',
    '200': 'hsl(var(--bg-200))',
    '300': 'hsl(var(--bg-300))',
    '400': 'hsl(var(--bg-400))',
    '500': 'hsl(var(--bg-500))',
  },

  border: {
    '100': 'hsl(var(--border-100))',
    '200': 'hsl(var(--border-200))',
    '300': 'hsl(var(--border-300))',
    '400': 'hsl(var(--border-400))',
  },

  danger: {
    '000': 'hsl(var(--danger-000))',
    '100': 'hsl(var(--danger-100))',
    '200': 'hsl(var(--danger-200))',
    '900': 'hsl(var(--danger-900))',
  },

  oncolor: {
    '100': 'hsl(var(--oncolor-100))',
    '200': 'hsl(var(--oncolor-200))',
    '300': 'hsl(var(--oncolor-300))',
  },

  success: {
    '000': 'hsl(var(--success-000))',
    '100': 'hsl(var(--success-100))',
    '200': 'hsl(var(--success-200))',
    '900': 'hsl(var(--success-900))',
  },

  text: {
    '000': 'hsl(var(--text-000))',
    '100': 'hsl(var(--text-100))',
    '200': 'hsl(var(--text-200))',
    '300': 'hsl(var(--text-300))',
    '400': 'hsl(var(--text-400))',
    '500': 'hsl(var(--text-500))',
  },
}
,
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        large: "16px",
        circle: "9999px",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontSize: {
        "3xl": "2rem",
      },
fontFamily: {
      // Use Mona Sans for Tailwind's `font-sans`
      sans: [
        "Mona Sans",
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Ubuntu",
        "sans-serif",
      ],
      // Use Domine for Tailwind's `font-serif`
      serif: [
        "Domine",
        "Georgia",
        "serif",
      ],
    },
      keyframes: {
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "var(--radix-accordion-content-height)",
            "max-height": "none",
            opacity: "1",
          },
        },
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        leave: "leave 150ms ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-radix")()],
}
