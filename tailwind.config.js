const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      borderWidth: {
        ...defaultTheme.borderWidth,
        '3': '3px'
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        default: '2px 2px 0 0 rgba(0, 0, 0, 100)',
        blue: '2px 2px 0 0 #458FD9',
        purple: '2px 2px 0 0 #7A35D2',
        md: '4px 4px 0 0 rgba(0, 0, 0, 100)',
        'purple-lg': '6px 6px 0 0 #7A35D2'
      },
      colors: {
        blue: {
          500: '#458FD9'
        },
        pink: {
          ...defaultTheme.colors.pink,
          300: '#FFA5f8',
          500: '#FF98FB'
        },
        purple: {
          800: '#7A35D2'
        },
        teal: {
          100: '#E4FFFB'
        }
      },
      fontFamily: {
        mono: ['Fira Mono', ...defaultTheme.fontFamily.mono]
      },
      translate: {
        '2px': '2px',
        '3px': '3px',
        '4px': '4px',
        '6px': '6px'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')]
}
