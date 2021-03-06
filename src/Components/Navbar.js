import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton, Drawer } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import Logo from "./Images/logo.png";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => {
  return {
    // NAVBAR CSS
    appbar: {
      // width: "100vw",
      margin: "auto",
      padding: 15,
      position: "static",
      // backgroundColor: "#fff",
    },
    logo: {
      maxWidth: 160,
      cursor: "pointer",
    },
    listitemleft: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      marginLeft: 30,
      whiteSpace: "nowrap",
    },
    listitemright: {
      display: "flex",
      flexDirection: "row",
      marginLeft: "auto",
      whiteSpace: "nowrap",
    },
    active: {
      color: "#6ca6c5",
    },
    hamburgerIcon: {
      marginLeft: "auto",
    },
    drawer: {
      width: 200,
      textAlign: "center",
      marginTop: 20, //
    },
  };
});

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  // state for activating mobile navigation
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  // function that sets navigation
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 850
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  // MENU LIST ITEMS
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
    // {
    //   text: "Register",
    //   path: "/register",
    // },
    {
      text: "Jobs",
      path: "/job_search",
    },
  ];

  // DESKTOP NAVIGATION VIEW
  const displayNavbarDesktop = () => {
    return (
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
                  location.pathname === item.path ? classes.active : null
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
                location.pathname === item.path ? classes.active : null
              }
            >
              {/* {item.path === "/login" ? <HomeIcon color="secondary" /> : null} */}

              <ListItemText primary={item.text}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    );
  };

  // MOBILE NAVIGATION VIEW
  const displayNavbarMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    // Close the drawer when link is clicked
    const pathAndClose = (path) => {
      history.push(path);
      handleDrawerClose();
    };

    return (
      <Toolbar>
        <img
          onClick={() => history.push("/")}
          src={Logo}
          alt="logo"
          className={classes.logo}
        />
        <div className={classes.hamburgerIcon}>
          <IconButton
            onClick={() => handleDrawerOpen()}
            color="inherit"
            aria-label="menu"
            aria-haspopup="true"
            // {...{
            //   edge: "end",
            //   color: "inherit",
            //   "aria-label": "menu",
            //   "aria-haspopup": "true",
            //   onClick: handleDrawerOpen,
            // }}
          >
            <MenuIcon />
          </IconButton>
        </div>

        <Drawer
          className={classes.drawerContainer}
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerClose}
          // {...{
          // anchor: "right",
          // open: drawerOpen,
          // onClose: handleDrawerClose,
          //   }
          // }
        >
          {/* TOP NAVIGATION */}
          <List>
            <ListItemIcon></ListItemIcon>
            {menuItemsLeft.map((item) => (
              <ListItem
                className={classes.drawer}
                key={item.text}
                button
                onClick={() => pathAndClose(item.path)}
              >
                <ListItemText
                  className={
                    location.pathname === item.path ? classes.active : null
                  }
                  primary={item.text}
                ></ListItemText>
              </ListItem>
            ))}
          </List>
          {/* BOTTOM NAVIGATION */}
          <List>
            {menuItemsRight.map((item) => (
              <ListItem
                className={classes.drawer}
                key={item.text}
                button
                onClick={() => pathAndClose(item.path)}
              >
                {/* {item.path === "/login" ? <HomeIcon color="secondary" /> : null} */}

                <ListItemText
                  className={
                    location.pathname === item.path ? classes.active : null
                  }
                  primary={item.text}
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    );
  };

  return (
    <div>
      <AppBar className={classes.appbar}>
        {mobileView ? displayNavbarMobile() : displayNavbarDesktop()}
      </AppBar>
    </div>
  );
};

export default Navbar;
