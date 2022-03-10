import { MainContainer, ContentContainer, FooterContainer } from "./style";
import SecurityImage from "../../../assets/security-image.png";
import NavBar from "../../NavBar";
import HomeButton from "../../HomeButton"

export const Home = () => {
  return (
    <MainContainer>
      <NavBar/>
      <ContentContainer>
          <img src={SecurityImage} alt="security"/>
      </ContentContainer>
      <FooterContainer>
      <HomeButton text="Get started"></HomeButton>
      <HomeButton text="Promo video"></HomeButton>
      </FooterContainer>
    </MainContainer>
  );
};
