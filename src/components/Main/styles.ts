import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
    }

`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
   

    h1 {
        font-family: Epilogue;
        margin-top: 2rem;
        font-weight: 700;
    }

    span {
        color: ${props=>props.theme.colors["Medium-Gray"]};
        width: 21rem;
        line-height: 1.7rem;
        margin-top: 1.4rem;
    }

`