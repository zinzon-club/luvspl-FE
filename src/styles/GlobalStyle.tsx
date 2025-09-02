"use client";

import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      @font-face {
          font-family: 'MiraeroNormal';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/MiraeroNormal.woff') format('woff');
          font-weight: normal;
          font-style: normal;
      }

      html,
      body,
      * {
        font-family: "GangwonEducationSaeum", sans-serif;
      }

      #nprogress .bar {
        background: #364155 !important;
        height: 3px !important;
      }

      #nprogress .peg {
        box-shadow: 0 0 10px rgba(54, 65, 85, 0.6), 0 0 5px rgba(54, 65, 85, 0.6) !important;
      }
    
    `}
  />
);

export default GlobalStyle;