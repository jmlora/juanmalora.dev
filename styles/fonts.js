import css from 'styled-jsx/css'

// Use styled-jsx instead of global CSS because global CSS
// does not work for AMP pages: https://github.com/vercel/next.js/issues/10549
export default css.global`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url('/assets/fonts/Roboto-Thin.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 200;
    src: url('/assets/fonts/Roboto-Light.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('/assets/fonts/Roboto-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    src: url('/assets/fonts/Roboto-Regular.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: url('/assets/fonts/Roboto-Bold.ttf') format('truetype');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: url('/assets/fonts/Roboto-Black.ttf') format('truetype');
  }
`
