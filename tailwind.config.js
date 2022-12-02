/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  darkMode: 'class',
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  // purge:['./pages/**/*.{vue}'],
  theme: {
    extend: {
      colors: {
        primary:{
          100:'#F64E60',
          200: '#a50a2e',
        },
        secondary:{
          100: '#fdbb57',
          200: '#ee9c47',
        },
        aqua:'#39c0ed',
        violet:'#b294fd',
        base: {
          100:'#2A303C'
        }
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  daisyui:{
    themes: [
          {
          mytheme: {
            "primary": "#a50a2e",
            "secondary": "#ee9c47",
            "accent": "#1FB2A6",
            "neutral": "#191D24",
            "base-100": "#2A303C",
            "info": "#3ABFF8",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
          },
        },
    ],

  },
  
  plugins: [require('tailwindcss-rtl'),require('flowbite/plugin'),require('tailwindcss-fluid-type'),require('daisyui'),require('@tailwindcss/aspect-ratio')],
}

