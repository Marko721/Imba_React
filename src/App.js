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
import Testing from "./Pages/Testing";
import JobSearch from "./Pages/JobSearch";
import Faqs from "./Pages/Faqs";
import JobDetails from "./Components/JobDetails";
import Dashboard from "./Components/Dashboard/Dashboard";
import JobsActive from "./Components/Dashboard/JobsActive";
import JobAdd from "./Components/Dashboard/JobAdd";
import JobApplications from "./Components/Dashboard/JobApplications";
import JobEdit from "./Components/Dashboard/JobEdit";
import Users from "./Components/Dashboard/Users";
import NotFound from "./Pages/NotFound";
import AccountInfo from "./Components/Dashboard/AccountInfo";

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
      fontSize: "3.5rem",
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1.5rem",
      marginBottom: 10,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            {/* PAGES */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/nurses">
              <Nurses />
            </Route>
            <Route exact path="/facilities">
              <Facilities />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/job_search">
              <JobSearch />
            </Route>
            <Route exact path="/faqs">
              <Faqs />
            </Route>
            <Route path="/jobs/:id">
              <JobDetails />
            </Route>

            {/* DASHBOARD */}

            <Route exact path="/dashboard/">
              <Dashboard>
                <JobApplications />
              </Dashboard>
            </Route>
            <Route exact path="/dashboard/all_jobs">
              <Dashboard>
                <JobsActive />
              </Dashboard>
            </Route>
            <Route exact path="/dashboard/add_job">
              <Dashboard>
                <JobAdd />
              </Dashboard>
            </Route>
            <Route exact path="/dashboard/edit_job">
              <Dashboard>
                <JobEdit />
              </Dashboard>
            </Route>
            <Route exact path="/dashboard/users">
              <Dashboard>
                <Users />
              </Dashboard>
            </Route>
            <Route exact path="/dashboard/account_info">
              <Dashboard>
                <AccountInfo />
              </Dashboard>
            </Route>

            {/* Test */}
            <Route exact path="/testing">
              <Testing />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
