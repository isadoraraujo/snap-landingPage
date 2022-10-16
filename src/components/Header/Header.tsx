<<<<<<< HEAD

import { HeaderContainer } from './styles'
=======
import { HeaderContainer, NavLinks, NavRegister } from './styles'
>>>>>>> main

export const Header = () => {
    return (
        <HeaderContainer>
            <nav>
                <a>Features</a>
                <a>Comapany</a>
                <a>Careers</a>
                <a>About</a>
            </nav>
            <nav>
                <a>Login</a>
                <button><a>Register</a></button>
            </nav>
        </HeaderContainer>
    )
}