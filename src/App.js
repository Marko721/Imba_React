import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Nurses from "./Pages/Nurses";
import Facilities from "./Pages/Facilities";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff", // white
    },
    secondary: {
      main: "#458BAE", // blue
    },
    text: {
      primary: "#676767", // gray
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h2: {
      // fontSize: "4.2rem",
      fontFamily: "Roboto",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    h4: {
      textTransform: "uppercase",
      fontSize: "1.5rem",
    },
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
            <Route path="/nurses">
              <Nurses />
            </Route>
            <Route path="/facilities">
              <Facilities />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
