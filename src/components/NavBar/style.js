import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarItem = styled(Link)`
  margin-right: 4rem;
  color: #437A8C;
  transition: 0.4s;
  text-decoration: none;
  transition: 0.4s;
  padding: 2vh;
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: center;
  border: none;
  padding: 0;

  .company{
    color: #437A8C;
    font-size: 28px;
  }

  img{
    max-width: 10vh;
    max-height: 10vh;
  }
`

export const NavBarContainer = styled.div`
  height: 9vh;
  width: full;
  display: flex;
  background-color: #0A0D16;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    text-decoration: none;
  }

  .header:hover {
    color: #87c639;
  }

  .exit{
    margin-left: 30vh;
  }

  .exit:hover {
    color: #ff0000;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown:hover {
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #0A0D16;
    border-radius: 0.25rem;
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    text-decoration: none;
    color: #437A8C;
    display: block;
    margin: 2vh;
  }

  .dropdown-content a:hover {
    color: #87c639;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }
  transition: 0.4s;
`;
