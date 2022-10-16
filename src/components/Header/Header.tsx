import { Close, Content, HeaderContainer, HeaderMobile, NavLinks, NavRegister, Overlay, Trigger } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

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
                        <a>Features</a>
                        <a>Company</a>
                        <a>Careers</a>
                        <a>About</a>
                    </NavLinks>
                    <NavRegister>
                        <a>Login</a>
                        <button><a>Register</a></button>
                    </NavRegister>
                </>
            ) : (
                <HeaderMobile>
                    <figure>
                            <img src="logo.svg" alt="Logo" />
                        </figure>
                    <Dialog.Root>
                        <Trigger asChild>
                            <figure>
                                <img src="icon-menu.svg" />
                            </figure>
                        </Trigger>
                        <Dialog.Portal>
                            <Overlay />
                            <Content>
                                <Close><img src="icon-close-menu.svg" /></Close>
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
                </HeaderMobile>
            )}
        </HeaderContainer>
    )
}