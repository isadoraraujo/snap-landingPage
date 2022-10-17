import styled from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const MenuRoot = styled(NavigationMenu.Root)`
  display: flex;
  padding: 0 2rem;
  position: relative;
`;

export const MenuList = styled(NavigationMenu.List)`
  display: flex;
  gap: 1rem;
  width: 12rem;
  text-decoration: none;
  list-style: none;
`;

export const MenuTrigger = styled(NavigationMenu.Trigger)`
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Epilogue', sans-serif;
  font-size: 16px;
  color: ${(props) => props.theme.colors["Medium-Gray"]};
  cursor: pointer;
  > p:hover {
    color: ${(props) => props.theme.colors["Almost-Black"]};
  }
`;

export const MenuContent = styled(NavigationMenu.Content)`
  position: absolute;

  .Feature {
    width: 10rem;
    margin-left: -5rem;
  }

  .Company {
    width: 8rem;
  }

  > ul {
    border: 1px solid ${(props) => props.theme.colors["Almost-White"]};
    box-shadow: 10px 23px 39px -17px rgba(0, 0, 0, 0.75);
    list-style: none;
    background: ${(props) => props.theme.colors["Almost-White"]};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    padding: 1rem 1rem;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    > li {
      display: flex;
      gap: 1rem;
    }
  }
`;