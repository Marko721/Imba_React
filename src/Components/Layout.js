import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";

// Custom CSS
const useStyles = makeStyles({
  page: {
    backgroundColor: "#ccc",
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
    maxWidth: 160,
  },
  listitems: {
    alignContent: "center",
  },
  listitemleft: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
    alignItems: "flex-start",
  },
  listitemright: {
    display: "flex",
    flexDirection: "row",
    margin: 0,
    padding: 0,
    alignItems: "flex-end",
  },
});

// MENU LIST ITEMS
const Layout = ({ children }) => {
  const classes = useStyles();

  const menuItemsLeft = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Nurses",
      path: "/create",
    },
    {
      text: "Facilities",
      path: "/create",
    },
    {
      text: "About",
      path: "/create",
    },
    {
      text: "Contact",
      path: "/create",
    },
  ];

  const menuItemsRight = [
    {
      text: "Log in",
      path: "/log_in",
    },
    {
      text: "Register",
      path: "/register",
    },
  ];

  return (
    <div>
      {/* NAVBAR */}
      <AppBar position="static" color="primary" elevation="0">
        <Grid className={classes.listitems}>
          <Toolbar className={classes.listitems}>
            {/* LOGO */}
            <img src="./Images/logo.png" alt="logo" className={classes.logo} />

            {/* LEFT NAVIGATION */}
            <List className={classes.listitemleft}>
              {menuItemsLeft.map((item) => (
                <ListItem
                  key={item.text}
                  button
                  // onClick={() => history.push(item.path)}
                  // className={
                  //   location.pathname == item.path ? classes.active : null
                  // }
                >
                  <ListItemText primary={item.text}></ListItemText>
                </ListItem>
              ))}
            </List>

            {/* RIGHT NAVIGATION */}
            <List className={classes.listitemright}>
              {menuItemsRight.map((item) => (
                <ListItem
                  key={item.text}
                  button
                  // onClick={() => history.push(item.path)}
                  // className={
                  //   location.pathname == item.path ? classes.active : null
                  // }
                >
                  <ListItemText primary={item.text}></ListItemText>
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </Grid>
      </AppBar>

      {/* Content */}
      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
