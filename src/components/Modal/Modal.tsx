import * as Dialog from "@radix-ui/react-dialog";
import {
  Close,
  ContainerTextModal,
  Content,
  NavRegisterModal,
  Overlay,
} from "./styles";

export function Modal() {
  return (
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
              <p>Features</p> <img src="icon-arrow-down.svg" alt="" />
            </a>
            <a>
              <p>Company</p> <img src="icon-arrow-down.svg" alt="" />
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
  );
}
