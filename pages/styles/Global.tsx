import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
    }

    body {
        background-color: #50aa8d;
        color: #fff;
    }
    
    div {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;
