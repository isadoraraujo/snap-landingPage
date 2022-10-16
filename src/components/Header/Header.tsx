import { Close, Content, HeaderContainer, NavLinks, NavRegister, Overlay } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';



export const Header = () => {
    return (
        <HeaderContainer>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <img src="icon-menu.svg"/>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Overlay />
                    <Content>
                    <Close><img src="icon-close-menu.svg"/></Close>
                    <a>Features</a>
                    <a>Company</a>
                    <a>Careers</a>
                    <a>About</a>
                    <NavRegister>
                        <a>Login</a>
                        <button><a>Register</a></button>
                    </NavRegister>
                    </Content>
                </Dialog.Portal>
            </Dialog.Root>
            <NavLinks>
                <figure>
                    <img src="logo.svg" alt="Logo" />
                </figure>
                <a>Features</a>
                <a>Company</a>
                <a>Careers</a>
                <a>About</a>
            </NavLinks>
            <NavRegister>
                <a>Login</a>
                <button><a>Register</a></button>
            </NavRegister>
        </HeaderContainer>
    )
}