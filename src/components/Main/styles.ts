import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
   
  }

  @media (max-width: 1020px) {
   .Desktop {
      display: none;
   }
  }

  @media (min-width: 1024px) {
    .Mobile{
      display: none;
    }
    .Desktop {
      img {
        max-height: 50rem;
      }
    }
  }

  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    padding: 0rem 4rem;
    justify-content: space-between;
    width: 100%;
    
    .Mobile{
      display: none;
    }
   

    > img {
      max-width: 100%;
      max-height: 36rem;
    }
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 1440px) {
    > img {
      height: 40rem;
    }
  }

  > img {
    max-height: 100%;
    max-width: 100%;
  }
`;

export const ContainerText = styled.div`


  h1 {
    font-family: Epilogue;
    margin-top: 2rem;
    font-weight: 700;
  }
  span {
    color: ${(props) => props.theme.colors["Medium-Gray"]};
    width: 21rem;

    line-height: 1.7rem;
    margin-top: 1.4rem;
  }
  @media (min-width: 375px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

 
  @media (min-width: 1440px) {
    margin-top: 4rem;
    text-align: left;
    align-items: flex-start;

    h1 {
      font-family: Epilogue;
      font-weight: 700;
      margin-top: 0.25rem;

      font-size: 5rem;
      width: 33rem;
    }

    span {
      width: 24rem;
    }
  }
`;

export const Button = styled.button`
  width: 10.2rem;
  padding: 1rem;
  margin-top: 3rem;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  background: ${(props) => props.theme.colors["Almost-Black"]};
  color: white;
  font-weight: bold;
  font-family: Epilogue;
  font-size: 1rem;
  transition: all ease 0.2s;
  border: 1px solid ${(props) => props.theme.colors["Almost-Black"]};

  &:hover {
    background: white;
    color: ${(props) => props.theme.colors["Almost-Black"]};
  }

  @media (min-width: 1440px) {
    margin-bottom: 6rem;
  }
`;

export const ContainerLogos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 375px) {
    img {
      margin-top: 3.75rem;
      width: 20%;
    }
  }
`;
