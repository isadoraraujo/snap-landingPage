import { HeaderContainer, HeaderMobile, NavLinks, NavRegister } from "./styles";

import { NavigationMenuContainer } from "../NavigationMenuContainer/NavigationMenu";
import { Modal } from "../Modal/Modal";

export const Header = () => {
  const isWidthDesktop = window.screen.width;

  return (
    <HeaderContainer>
      <>
        <NavLinks className="Desktop">
          <figure>
            <img src="logo.svg" alt="Logo" />
          </figure>
          <NavigationMenuContainer />
          <a>Careers</a>
          <a>About</a>
        </NavLinks>
        <NavRegister className="Desktop">
          <a>Login</a>
          <button>
            <a>Register</a>
          </button>
        </NavRegister>
      </>

      <HeaderMobile className="Mobile">
        <figure>
          <img src="logo.svg" alt="Logo" />
        </figure>
        <Modal />
      </HeaderMobile>
    </HeaderContainer>
  );
};
