import React from "react";
import {
  makeStyles,
  Paper,
  Typography,
  Grid,
  Container,
  Divider,
  Link,
  Box,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory, useLocation } from "react-router";
import Logo from "./Images/logo.png";

const useStyles = makeStyles((theme) => ({
  // FOOTER
  footer: {
    paddingTop: 70,
    paddingBottom: 20,
    backgroundColor: "#3F86AB",
  },
  title: {
    paddingLeft: 16,
    marginBottom: 5,
    color: "#fff",
    fontSize: 18,
  },
  listItem: {
    color: "#fff",
    "&:hover": {
      // color: "#676767",
    },
  },
  logo: {
    // padding: 50,
    maxWidth: 250,
    cursor: "pointer",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.arwenet.com">
        Imba Health doo | All Rights Reserved | Privacy Policy | Terms and
        Conditions
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = ({ mobileView }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  // MENU LIST ITEMS
  const menuItems = [
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

  const resourcesLinks = [
    {
      text: "FAQ",
      path: "/faq",
    },
    {
      text: "Support",
      path: "/support",
    },
    {
      text: "Contact",
      path: "/contact",
    },
  ];

  const socialLinks = [
    {
      text: "Facebook",
      path: "/faq",
    },
    {
      text: "Twitter",
      path: "/support",
    },
    {
      text: "Email",
      path: "/contact",
    },
  ];

  return (
    <div className={classes.footer}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3}>
            <List>
              <Typography className={classes.title}>Links</Typography>
              <Divider />
              {menuItems.map((item) => (
                <ListItem
                  key={item.text}
                  button
                  onClick={() => history.push(item.path)}
                >
                  <ListItemText
                    className={classes.listItem}
                    primary={item.text}
                  ></ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* RESOURCES LINKS */}
          <Grid item xs={12} sm={6} md={3}>
            <List>
              <Typography className={classes.title}>Resources</Typography>
              <Divider />
              {resourcesLinks.map((item) => (
                <ListItem
                  key={item.text}
                  button
                  onClick={() => history.push(item.path)}
                >
                  <ListItemText
                    className={classes.listItem}
                    primary={item.text}
                  ></ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* SOCIAL LINKS */}
          <Grid item xs={12} sm={6} md={3}>
            <List>
              <Typography className={classes.title}>Social</Typography>
              <Divider />
              {socialLinks.map((item) => (
                <ListItem
                  key={item.text}
                  button
                  onClick={() => history.push(item.path)}
                >
                  <ListItemText
                    className={classes.listItem}
                    primary={item.text}
                  ></ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* LOGO Info */}
          <Grid item xs={12} sm={6} md={3}>
            <img src={Logo} className={classes.logo} />
          </Grid>
        </Grid>

        {/* COPYRIGHT */}
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
