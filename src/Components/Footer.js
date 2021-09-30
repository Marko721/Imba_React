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
import LogoWhite from "./Images/logo_white.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
  iconsList: {
    display: "flex",
    marginTop: 33,
  },
  logo: {
    // padding: 50,
    maxWidth: 250,
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
}));

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
    {
      text: "Privacy Policy",
      path: "#",
    },
    {
      text: "Terms and Conditions",
      path: "#",
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
              <Typography className={classes.title}>Contact</Typography>
              <Divider />

              <Typography className={classes.title} style={{ marginTop: 10 }}>
                office@imba.com
              </Typography>
              <Typography className={classes.title}>
                +1 123 533 212 5324
              </Typography>
              <div className={classes.iconsList}>
                <ListItem key="facebook" button>
                  <FacebookIcon color="primary" fontSize="large" />
                </ListItem>
                <ListItem key="instagram" button>
                  <InstagramIcon color="primary" fontSize="large" />
                </ListItem>
                <ListItem key="linkedIn" button>
                  <LinkedInIcon color="primary" fontSize="large" />
                </ListItem>
                <ListItem></ListItem>
              </div>
            </List>
          </Grid>

          {/* LOGO Info */}
          <Grid item xs={12} sm={6} md={3}>
            <img src={LogoWhite} className={classes.logo} />
          </Grid>
        </Grid>

        {/* COPYRIGHT */}
        <Typography
          variant="body2"
          color="primary"
          align="center"
          style={{ marginTop: 30 }}
        >
          {"Copyright © "}
          <Link color="inherit" href="#">
            Imba Health Solutions LLC | All Rights Reserved
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
