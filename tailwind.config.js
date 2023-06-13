/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              '::before': {
                content: '""',
                display: 'inline-block',
                width: '20px',
                height: '2px',
                backgroundColor: '#000',
                marginRight: '10px',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')
],
}

