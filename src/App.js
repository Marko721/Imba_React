import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Nurses from "./Pages/Nurses";
import Facilities from "./Pages/Facilities";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff8300",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Nurses">
              <Nurses />
            </Route>
            <Route path="/Facilities">
              <Facilities />
            </Route>
            <Route path="/About-us">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
