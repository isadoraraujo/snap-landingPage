import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const HeaderContainer = styled.header`
  color: ${(props) => props.theme.colors["Medium-Gray"]};

  width: 100%;
  margin-top: 1%;
  @media (min-width: 375px) {
  }
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const NavLinks = styled.nav`
  a {
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    margin-left: 3%;
    padding: 1rem;
    height: 6rem;
    > figure {
      display: flex;
      align-items: center;
    }
  }
`;
export const NavRegister = styled.nav`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    margin-right: 3%;
    padding: 1rem;
    height: 6rem;
    > button {
      padding: 0.7rem 1rem;
      border: 1.8px solid;
      border-color: ${(props) => props.theme.colors["Almost-Black"]};
      color: ${(props) => props.theme.colors["Medium-Gray"]};
      border-radius: 13px;
      font-family: "Epilogue", sans-serif;
      font-size: 16px;
    }
  }

  a {
    cursor: pointer;
  }
`;

export const HeaderMobile = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5%;
`

export const Trigger = styled(Dialog.Trigger)`
 > figure > img {
  width: 100%;
}
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  > button {
    width: fit-content;
  }
`
export const Close = styled(Dialog.Close)`
  left: 100%;
  border: none;
  display: flex;
  justify-content: flex-end;
`