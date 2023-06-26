/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
      },
      animation: {
        none: 'none',
        fadeIn: 'fadeIn 2s ease-in forwards',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 2s infinite',
        bounceFirst: 'bounceFirst 2s infinite',
        bounceSecond: 'bounceSecond 2s infinite',
        html5: 'html5 2s forwards',
        css3: 'css3 2s forwards',
        javascript: 'javascript 2s forwards',
        nodejs: 'nodejs 2s forwards',
        reactjs: 'reactjs 2s forwards',
        mongodb: 'mongodb 2s forwards',
        tailwindcss: 'tailwindcss 2s forwards',
        bootstrap: 'bootstrap 2s forwards',
        materializecss: 'materializecss 2s forwards',
        sass: 'sass 2s forwards',
        expressjs: 'expressjs 2s forwards',
        sql: 'sql 2s forwards',
        materialui: 'materialui 2s forwards',
        jquery: 'jquery 2s forwards',
      },
      fontFamily: {
        dosis: ['Dosis'],
        textMeOne: ['"Text Me One"'],
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
        pulse: {
          '50%': {
            opacity: '.5',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        bounceFirst: {
          '0%, 100%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
        bounceSecond: {
          '0%, 100%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
        html5: {
          '0%': { width: '0%' },
          '100%': { width: '90%' },
        },
        css3: {
          '0%': { width: '0%' },
          '100%': { width: '80%' },
        },
        javascript: {
          '0%': { width: '0%' },
          '100%': { width: '90%' },
        },
        nodejs: {
          '0%': { width: '0%' },
          '100%': { width: '58%' },
        },
        reactjs: {
          '0%': { width: '0%' },
          '100%': { width: '88%' },
        },
        mongodb: {
          '0%': { width: '0%' },
          '100%': { width: '70%' },
        },
        tailwindcss: {
          '0%': { width: '0%' },
          '100%': { width: '80%' },
        },
        bootstrap: {
          '0%': { width: '0%' },
          '100%': { width: '60%' },
        },
        materializecss: {
          '0%': { width: '0%' },
          '100%': { width: '60%' },
        },
        sass: {
          '0%': { width: '0%' },
          '100%': { width: '70%' },
        },
        expressjs: {
          '0%': { width: '0%' },
          '100%': { width: '85%' },
        },
        sql: {
          '0%': { width: '0%' },
          '100%': { width: '50%' },
        },
        materialui: {
          '0%': { width: '0%' },
          '100%': { width: '60%' },
        },
        jquery: {
          '0%': { width: '0%' },
          '100%': { width: '70%' },
        },
      },
    },
  },
  plugins: [],
};
