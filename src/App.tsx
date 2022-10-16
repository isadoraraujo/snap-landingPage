import { ThemeProvider } from "styled-components";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;