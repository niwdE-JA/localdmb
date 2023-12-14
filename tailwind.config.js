/** @type {import('tailwindcss').Config} */
 
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
  ],
  theme: {
      extend: {
        backgroundColor: {
          primary: '#F3EED8',
          secondary: '#EBE4C7',
          headers: '#2A5C50',
        },
        color: {
          custom: '#666666',
        },
        borderColor: {
          custom: '#DCD5B8',
        },
      },
  },
  plugins: [],
};

