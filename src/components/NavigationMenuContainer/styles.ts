import { Trigger } from "./../Header/styles";
import styled from "styled-components";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const MenuRoot = styled(NavigationMenu.Root)`
  display: flex;
  position: relative;
`;

export const MenuList = styled(NavigationMenu.List)`
  display: flex;
  gap: 4rem;
  width: 20rem;
  margin-left: 4rem;
  text-decoration: none;
  list-style: none;
`;

export const MenuTrigger = styled(NavigationMenu.Trigger)`
  border: none;
  cursor: pointer;
`;

export const MenuContent = styled(NavigationMenu.Content)`
  position: absolute;


  > ul {
    width: 12rem;
    border: 1px solid gray;
    
    list-style: none;
    background: ${props=>props.theme.colors["Almost-White"]};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    gap: 1rem;

    > li {
      display: flex;
      background: white;
      gap: 1rem;
    }
  }
`;
