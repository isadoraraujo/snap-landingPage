import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { MenuContent, MenuList, MenuRoot, MenuTrigger } from "./styles";
import  { useState } from 'react';

export function NavigationMenuContainer() {
  const [isDownFeature, setIsDownFeature] = useState(true)
  const [isDownCompany, setIsDownCompany] = useState(true)

  function handleOver(id:string) {
    if(id === 'Feature') {
      setIsDownFeature(false)
    } else {
      setIsDownCompany(false)
    }
  }

  function handleOut(id:string) {
    if(id === 'Feature') {
      setIsDownFeature(true)
    } else {
      setIsDownCompany(true)
    }
  }

  return (
    <MenuRoot>
      <MenuList>
        <NavigationMenu.Item>
          <MenuTrigger onMouseOut={() => handleOut('Feature')} onMouseOver={() => handleOver('Feature')}  >
            <p>Features</p> <img src={isDownFeature ? 'icon-arrow-down.svg' : 'icon-arrow-up.svg'} />
          </MenuTrigger>
          <MenuContent>
            <ul className="Feature">
              <li>
                <img src="icon-todo.svg" alt="" /> <p>Todo List</p>
              </li>
              <li>
                <img src="icon-calendar.svg" alt="" /> <p>Calendar</p>
              </li>
              <li>
                <img src="icon-reminders.svg" alt="" /> <p>Reminders</p>
              </li>
              <li>
                <img src="icon-planning.svg" alt="" /> <p>Planning</p>
              </li>
            </ul>
            <NavigationMenu.Link />
          </MenuContent>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <MenuTrigger onMouseOut={() => handleOut('Company')} onMouseOver={() => handleOver('Company')}>
            <p>Company</p> <img src={isDownCompany ? 'icon-arrow-down.svg' : 'icon-arrow-up.svg'}/>
          </MenuTrigger>
          <MenuContent>
            <ul className="Company">
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
            <NavigationMenu.Link />
          </MenuContent>
        </NavigationMenu.Item>
      </MenuList>
    </MenuRoot>
  );
}
