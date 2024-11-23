module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to your React files
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
          login: 'rgba(9, 61, 91, 1)',
          signup: 'rgba(27, 64, 134, 1)',
          light: 'rgba(106, 168, 209, 1)',
        },
        yellow: {
          bg: 'rgba(254, 210, 74, 0.21)',
          btn: 'rgba(254, 210, 74, 1)',
          white: 'rgba(255, 255, 255, 1)',
        },
        white: {
          50: 'rgba(255, 255, 255, 1)',
        },
      },
    },
  },
  plugins: [],
}
