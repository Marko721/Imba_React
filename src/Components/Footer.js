import React from "react";
import {
  makeStyles,
  Paper,
  Typography,
  Grid,
  Container,
  Divider,
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
    paddingTop: 30,
    paddingBottom: 30,
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

  const resources = [
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
          <Grid item xs={12} sm={6} md={3}>
            <List>
              <Typography className={classes.title}>Resources</Typography>
              <Divider />
              {resources.map((item) => (
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
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
