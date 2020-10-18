import css from 'styled-jsx/css'

// Use styled-jsx instead of global CSS because global CSS
// does not work for AMP pages: https://github.com/vercel/next.js/issues/10549
export default css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: var(--body-bg-color);
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: #fff;
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    /* Colors */
    --body-bg-color: #f7f8fa;
    --primary-bg-color: #434e5e;
    --header-primary-color: #fff;
    --header-primary-color-light: rgba(255, 255, 255, 0.9);
    --header-primary-color-lighter: rgba(255, 255, 255, 0.6);

    /* Widths, spacings */
    --page-width: 1000px;
    --body-padding-top: 30px;
  }
`
