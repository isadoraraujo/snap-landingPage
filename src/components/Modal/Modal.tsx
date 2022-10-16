import  { useState } from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import {
  Close,
  ContainerTextModal,
  Content,
  NavRegisterModal,
  Overlay,
} from "./styles";


export function Modal() {
  const [isDownFeature, setIsDownFeature] = useState(true)
  const [isDownCompany, setIsDownCompany] = useState(true)

  function handleClick(id:string) {
    if(id === 'Feature') {
      setIsDownFeature(!isDownFeature)
    } else {
      setIsDownCompany(!isDownCompany)
    }
  }

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
            <a onClick={() => handleClick('Feature')}>
              <p>Features</p> <img src={isDownFeature ? 'icon-arrow-down.svg' : 'icon-arrow-up.svg'} />
            </a>
            <a onClick={() => handleClick('Company')}>
              <p>Company</p> <img src={isDownCompany ? 'icon-arrow-down.svg' : 'icon-arrow-up.svg'} />
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
