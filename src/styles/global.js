import {
    createGlobalStyle
} from 'styled-components'

export const GlobalStyle = createGlobalStyle `
body{
    height: 100vh;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    }
    
    button {
    cursor: pointer;
    }

`