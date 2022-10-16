import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: ${props=>props.theme.colors['Almost-White']}
    }
    body {
        font-family: 'Epilogue', sans-serif;
    }
`