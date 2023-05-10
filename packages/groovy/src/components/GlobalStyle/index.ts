import { createGlobalStyle } from "styled-components";

import convertRGBtoRGBA from "../../utils/convertRGBtoRGBA";

const GlobalStyle = createGlobalStyle`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    /* main */

    html,
    body,
    #__next {
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue",
            "Lucida Grande", sans-serif;
        background-color: ${({ theme }) => theme.colors.background.primary};
    }

    option {
        background-color: red;
    }

    /* scrollbar */

    html,
    body {
        scrollbar-color: ${({ theme }) =>
          theme.colors.background.secondary} ${({ theme }) =>
  theme.colors.background.primary};
    }

    ::-webkit-scrollbar {
        width: 10px;
        /* for vertical scrollbars */
        height: 10px;
        /* for horizontal scrollbars */
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.background.secondary};
        height: 10px;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track-piece {
        height: 30px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    /* fonts */

    body,
    span,
    input,
    button,
    textarea,
    select,
    option {
        font-family: ${({ theme }) => theme.family.primary};
        font-size: ${({ theme }) => theme.size.normal};
        font-weight: ${({ theme }) => theme.weight.regular};
        text-align: left;
        color: ${({ theme }) => theme.colors.text.primary};
        line-height: 1.25;
    }

    span {
        line-height: 1;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => convertRGBtoRGBA(theme.colors.text.primary, 1)};
        transition: all 0.2s;
        cursor: pointer;

        :hover {
            filter: brightness(0.8);
        }
    }

    pre, code {
        font-family: ${({ theme }) => theme.family.monospace};

        span {
            font-family: ${({ theme }) => theme.family.monospace};
        }
    }

    /* animations */

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        0% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes loading {
        0% {
            background-position: 0% 0;
        }
        50% {
            background-position: 100% 0;
        }
        100% {
            background-position: 0% 0;
        }
    }
    
    @keyframes fadeInDown {
        0% {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0)
        }
        to {
            opacity: 1;
            -webkit-transform: translateZ(0);
            transform: translateZ(0)
        }
    }

    @keyframes float {
        0% {
            transform: translatey(0px);
         }
         50% {
            transform: translatey(-10px);
        }
        100% {
            transform: translatey(0px);
        }
    }
`;

export default GlobalStyle;
