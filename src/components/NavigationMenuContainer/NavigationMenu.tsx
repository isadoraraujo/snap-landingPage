import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { MenuContent, MenuList, MenuRoot, MenuTrigger } from "./styles";

export function NavigationMenuContainer() {
  return (
    <MenuRoot>
      <MenuList>
        <NavigationMenu.Item>
          <MenuTrigger>
            Features <img src="icon-arrow-down.svg" alt="" />
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
          <MenuTrigger>
            Company <img src="icon-arrow-down.svg" alt="" />
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
