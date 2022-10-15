import { Button, Container, ContainerLogos, ContainerText } from "./styles";

export const Main = () => {
  const isWidthDesktop = window.screen.width;
 
  return (
    <Container>
      {isWidthDesktop >= 1440 ? (
        <img src="image-hero-desktop.png" />
      ) : (
        <img src="image-hero-mobile.png" alt="" />
      )} 
      <ContainerText>
        <h1>
          <strong>
            Make remote work
          </strong>
        </h1>
        <span>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </span>
        <Button>
          <strong>Learn more</strong>
        </Button>
        <ContainerLogos>
          <img src="client-databiz.svg" alt="" />
          <img src="client-audiophile.svg" alt="" />
          <img src="client-meet.svg" alt="" />
          <img src="client-maker.svg" alt="" />
        </ContainerLogos>
      </ContainerText>
    </Container>
  );
};
