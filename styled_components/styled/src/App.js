import Header from "./components/Header";
import { StyledHeader } from "./components/style/Header.style";
import GlobalStyles from "./components/style/Global.style";
import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",

    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledHeader>
        <Header />
      </StyledHeader>
      <Card />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
