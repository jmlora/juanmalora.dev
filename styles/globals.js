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

    --primary-header-bg-color: #434e5e;
    --header-primary-color: #fff;
    --header-primary-color-light: rgba(255, 255, 255, 0.9);
    --header-primary-color-lighter: rgba(255, 255, 255, 0.6);

    --primary-body-color: #434e5e;
    --light-body-color: #58677c;
    --lighter-body-color: #aab4c3;
    --contrast-body-color: #fff;
    --horizontal-rule-color: #8d9aad;

    --progress-bar-bg-color: #e9ecef;
    --progress-bar-fg-color: #434e5e;

    /* Widths, spacings */
    --page-width: 1000px;
    --body-padding-top: 30px;
  }

  .no-fouc {
    visibility: hidden;
    opacity: 0;
  }

  .fouc {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.4s;
    -webkit-transition: opacity 0.4s;
  }
`
