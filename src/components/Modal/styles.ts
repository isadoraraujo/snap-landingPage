import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  width: 28rem;
  height: 100vh;

  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 100%;
  padding: 2rem;
  transform: translate(-50%, -50%);
  > button {
    width: fit-content;
  }
`;
export const Close = styled(Dialog.Close)`
  margin-left: 8rem;
  border: none;
  display: flex;
  justify-content: flex-end;
`;

export const ContainerTextModal = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  > a {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

export const NavRegisterModal = styled.div`
  display: flex;
  align-items: flex-start;
  width: 9rem;

  margin-top: 2rem;
  gap: 1.75rem;
  flex-direction: column;

  > a {
    padding-left: 3rem;
    color: ${(props) => props.theme.colors["Medium-Gray"]};
  }

  > button {
    padding: 0.7rem 3.5rem;
    border: 1.8px solid;
    border-color: ${(props) => props.theme.colors["Almost-Black"]};
    color: ${(props) => props.theme.colors["Medium-Gray"]};
    border-radius: 13px;
    font-family: "Epilogue", sans-serif;
    font-size: 16px;
    cursor: pointer;
  }
`;
