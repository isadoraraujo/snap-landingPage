
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const HeaderContainer = styled.header`
  color: ${(props) => props.theme.colors["Medium-Gray"]};

  width: 100%;
  margin-top: 1%;
  @media (max-width: 1020px) {
   .Desktop {
      display: none;
   }
  }


  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .Mobile{
      display: none;
    }
  }
`;
export const NavLinks = styled.nav`


  a {
    cursor: pointer;
  }

  a:hover {
    color: ${(props) => props.theme.colors["Almost-Black"]};
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    gap:2rem;
    align-items: center;
    width: 70%;
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

  a:hover {
    color: ${(props) => props.theme.colors["Almost-Black"]};
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

