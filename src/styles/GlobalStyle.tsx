"use client";

import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      @font-face {
        font-family: "GangwonEducationSaeum";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduSaeeum_OTFMediumA.woff")
          format("woff");
        font-weight: normal;
        font-display: swap;
      }
      html,
      body,
      * {
        font-family: "GangwonEducationSaeum";
        color: #484b48;
      }

      #nprogress .bar {
        background: #364155 !important;
        height: 3px !important;
      }

      #nprogress .peg {
        box-shadow:
          0 0 10px rgba(54, 65, 85, 0.6),
          0 0 5px rgba(54, 65, 85, 0.6) !important;
      }
    `}
  />
);

export default GlobalStyle;
