<<<<<<< HEAD
import { ThemeProvider } from "styled-components";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
=======
import { ThemeProvider } from "styled-components"
import { Header } from "./components/Header/Header"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
>>>>>>> 700b975a734ea5a648fde6ceae2a733dbf4fae7d

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
<<<<<<< HEAD
      <Main />
=======
<<<<<<< HEAD
      <Main/>
      <Header />
>>>>>>> 700b975a734ea5a648fde6ceae2a733dbf4fae7d
>>>>>>> main
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
