import React from "react";
import {
  makeStyles,
  Paper,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory, useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  // FOOTER
  footer: {
    height: 400,
    backgroundColor: "rgba(0,0,0,.5)",
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

  return (
    <div className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={3}>
            <List className={classes.listitemleft}>
              {menuItems.map((item) => (
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
