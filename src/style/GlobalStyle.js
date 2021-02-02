import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: #eee;
    font-family: 'Roboto Condensed', sans-serif;
}

/* 
    h2 {
        font-weight: lighter;
        font-size: 4rem;
    }
    h3 {
        color: white;
    }
    h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    a {
        font-size: 1.1rem;
    }
    span {
        font-weight: bold;
        color: #23d997;
    }
    p {
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    } */
`;

export default GlobalStyle;