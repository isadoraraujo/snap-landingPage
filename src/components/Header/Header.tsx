import {
  Close,
  ContainerTextModal,
  Content,
  HeaderContainer,
  HeaderMobile,
  NavLinks,
  NavRegister,
  NavRegisterModal,
  Overlay,
} from "./styles";
import * as Dialog from "@radix-ui/react-dialog";
import { NavigationMenuContainer } from "../NavigationMenuContainer/NavigationMenu";

export const Header = () => {
  const isWidthDesktop = window.screen.width;

  return (
    <HeaderContainer>
      {isWidthDesktop >= 1024 ? (
        <>
          <NavLinks>
            <figure>
              <img src="logo.svg" alt="Logo" />
            </figure>
            <NavigationMenuContainer />

            <a>Careers</a>
            <a>About</a>
          </NavLinks>
          <NavRegister>
            <a>Login</a>
            <button>
              <a>Register</a>
            </button>
          </NavRegister>
        </>
      ) : (
        <HeaderMobile>
          <figure>
            <img src="logo.svg" alt="Logo" />
          </figure>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <img src="icon-menu.svg" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Overlay />
              <Content>
                <Close>
                  <img src="icon-close-menu.svg" />
                </Close>
                <ContainerTextModal>
                  <a>
                    Features <img src="icon-arrow-down.svg" alt="" />
                  </a>
                  <a>
                    Company <img src="icon-arrow-down.svg" alt="" />
                  </a>
                  <a>Careers</a>
                  <a>About</a>
                </ContainerTextModal>
                <NavRegisterModal>
                  <a>Login</a>
                  <button>
                    <a>Register</a>
                  </button>
                </NavRegisterModal>
              </Content>
            </Dialog.Portal>
          </Dialog.Root>
        </HeaderMobile>
      )}
    </HeaderContainer>
  );
};
