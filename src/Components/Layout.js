import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory, useLocation } from "react-router";
import Logo from "./Images/logo.png";

// Custom CSS
const useStyles = makeStyles({
  page: {
    backgroundColor: "#333333",
    width: "100%",
    padding: 20,
    height: "100vh",
  },
  appbar: {
    width: "100vw",
    margin: 0,
    padding: 0,
  },
  logo: {
    maxWidth: 120,
    cursor: "pointer",
  },
  listitemleft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 30,
  },
  listitemright: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
  },
  active: {
    color: "#6ca6c5",
  },
  orange: {
    backgroundColor: "#3C3C3C",
  },
});

// MENU LIST ITEMS
const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItemsLeft = [
    {
      text: "Nurses",
      path: "/nurses",
    },
    {
      text: "Facilities",
      path: "/facilities",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  const menuItemsRight = [
    {
      text: "Log in",
      path: "/login",
    },
    {
      text: "Register",
      path: "/register",
    },
  ];

  return (
    <div>
      {/* NAVBAR */}
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* LOGO */}
          <img
            onClick={() => history.push("/")}
            src={Logo}
            alt="logo"
            className={classes.logo}
          />
          {/* LEFT NAVIGATION */}
          <List className={classes.listitemleft}>
            {menuItemsLeft.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => history.push(item.path)}
              >
                <ListItemText
                  className={
                    location.pathname == item.path ? classes.active : null
                  }
                  primary={item.text}
                ></ListItemText>
              </ListItem>
            ))}
          </List>
          {/* RIGHT NAVIGATION */}
          <List className={classes.listitemright}>
            {menuItemsRight.map((item) => (
              <ListItem
                key={item.text}
                button
                onClick={() => history.push(item.path)}
                className={
                  location.pathname == item.path ? classes.active : null
                }
              >
                {/* {item.path == "/login" ? <HomeIcon color="secondary" /> : null} */}

                <ListItemText primary={item.text}></ListItemText>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
