import { HeaderContainer, NavLinks, NavRegister } from "./styles";

export const Header = () => {
    return (
        <HeaderContainer>
            <NavLinks>
            <h1>I</h1>
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
