import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Close,
  ContainerMenu,
  ContainerTextModal,
  Content,
  NavRegisterModal,
  Overlay,
} from "./styles";

export function Modal() {
  const [isDownFeature, setIsDownFeature] = useState(true);
  const [isDownCompany, setIsDownCompany] = useState(true);

  function handleClick(id: string) {
    if (id === "Feature") {
      setIsDownFeature(!isDownFeature);
    } else {
      setIsDownCompany(!isDownCompany);
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <img src="icon-menu.svg" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Close>
            <img src="icon-close-menu.svg" />
          </Close>
          <ContainerTextModal>
            <div>
              <a onClick={() => handleClick("Feature")}>
                <p>Features</p>{" "}
                <img
                  src={
                    isDownFeature ? "icon-arrow-down.svg" : "icon-arrow-up.svg"
                  }
                />
              </a>
            </div>
            <ContainerMenu>
              <ul
                className={
                  isDownFeature === false ? "FeatureShow" : "FeatureHidden"
                }
              >
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
            </ContainerMenu>
          </ContainerTextModal>

          <ContainerTextModal>
            <div>
              <a onClick={() => handleClick("Company")}>
                <p>Company</p>
                <img
                  src={
                    isDownCompany ? "icon-arrow-down.svg" : "icon-arrow-up.svg"
                  }
                />
              </a>
            </div>
            <ContainerMenu>
              <ul
                className={
                  isDownCompany === false ? "CompanyShow" : "CompanyHidden"
                }
              >
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            </ContainerMenu>
          </ContainerTextModal>
          <ContainerTextModal>
            <a>Careers</a>
            <a>About</a>
          </ContainerTextModal>
          <NavRegisterModal>
            <a>Login</a>
            <button>
              <a>Register</a>
            </button>
          </NavRegisterModal>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
