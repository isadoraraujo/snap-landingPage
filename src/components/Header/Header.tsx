import React from 'react'
import { HeaderContainer } from './styles'

export const Header = () => {
    return (
        <HeaderContainer>
            <h1>Exemplo</h1>
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