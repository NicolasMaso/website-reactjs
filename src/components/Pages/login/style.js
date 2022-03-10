import styled from "styled-components"

export const MainContainer = styled.div`
height: 100vh;
width: full;
display: flex;
align-items: center;
justify-content: center;
background-color: #0A0D16;
display: flex;
flex-direction: column;
`

export const InputContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 1rem; 
width: 30vh;
height: 12vh;
align-items: center;
`

export const ButtonContainer = styled.div`
margin-top: 1rem;
display: block;
justify-content: space-evenly;

    .login-button{
        text-decoration: none;
        background-color: #E8760E;
        border-radius: 0.25rem;
        border: none;
        width: 20vh;
        padding: 0.5rem;
        transition: 0.4s;
    }

    .login-button:hover{
        background-color: #E8760E50;
        color: white;
    }
    
`

export const LogoContainer = styled.div`
color: #437A8C;
font-size: 100px;
align-items: center;
display: flex;

img{
    max-width: 20vh;
    max-height: 20vh;
}
`