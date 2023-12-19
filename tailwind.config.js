module.exports = {
  purge: {
    enabled: true,
    content: ['./public/*.html'],
  },
  // 
  darkMode: false, // or 'media' or 'class'
  theme: {  
    boxShadow: {
    lg: '0px 4px 10px 0px rgba(0,0,0,0.41)',
    },
    extend: {

      colors: {
        morado:'#2B0164',
        grisclaro:'#B0B0B0',
        gristxt:'#454444',
        fondogris:'#F2F5FA',
        grisazul:'#21265C',
        grisrecargas :'#6B6A6A',
        red: {
          100:'#E51B2A',
          200:'#E1373F',
          300:'#d21b22'
        },
        gray:{
          100:'#3D3C3C',
          200:'#030303',
          300:'#050505',
          400:'#4B4B4B',
          500:'#707070',
          600:'#E2E2E2',
          700:'#454344',
          800:'#EAEAEA',
          900:'#f2f2f2'
        },
        blue: {
          100:'#00ACEC',
          200:'#1D8BC6',
          300:'#21396F',
          400:'#1CA5E1',
          500:'#1D8AC5',
          600:'#1F2139'

        },
        azulclaro: {
          100:'#1D8CC7',
          200:'#75D3F7'
        },
        orange: {
          100:'#F87229',
          200:'#FF8C05',
          300:'#FF8C06'
        },
      },
      fontFamily: {
        'sans': ['Gotham'],
        'display': ['Roboto'],
        'serif': ['Akzidenz Grotesk BE Regular'],
        'mono': ['Akzidenz Grotesk BE Bold'],
        'body':['Helvetica']
      },
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
