import { Header } from "../Header/Header";
import {
  Button,
  Container,
  ContainerLogos,
  ContainerText,
  ImageContainer,
} from "./styles";

export const Main = () => {

  return (
    <>
      <Header />
      <Container>
        <ImageContainer className="Desktop">
          <img src="image-hero-desktop.png" />
        </ImageContainer>
        <ImageContainer className="Mobile">
          <img src="image-hero-mobile.png" alt="" />
        </ImageContainer>
        <ContainerText>
          <h1>
            <strong>Make remote work</strong>
          </h1>
          <span>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </span>
          <Button>Learn more</Button>
          <ContainerLogos>
            <img src="client-databiz.svg" alt="" />
            <img src="client-audiophile.svg" alt="" />
            <img src="client-meet.svg" alt="" />
            <img src="client-maker.svg" alt="" />
          </ContainerLogos>
        </ContainerText>
      </Container>
    </>
  );
};
