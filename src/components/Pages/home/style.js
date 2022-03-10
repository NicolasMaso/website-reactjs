import styled from "styled-components";

export const MainContainer = styled.div`
display: flex;
flex-flow: column;
height: 100vh;

.NavBar{
  flex-grow: 0;
  flex-basis: auto;
}

`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  flex-basis: auto;
  background-color: #003b61;
  text-align: center;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }

`;

export const FooterContainer = styled.div`
background-color: #003b61;
flex-grow: 0;
flex-basis: 100px;
text-align: center;
align-items: center;
justify-content: space-between;
`;