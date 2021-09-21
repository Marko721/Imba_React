import React from "react";
import Grid from "@material-ui/core/Grid";
import { ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { BorderAll } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    width: "100%",
    padding: 10,
    height: 800,
  },
  menuContainer: {},
  pageContainer: {},
}));

const adminLinks = [];
const userLinks = [];

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.dashboardContainer}>
      <Grid item xs={12} sm={2} className={classes.menuContainer}>
        <Paper>
          <ListItem>
            <Link>Interests</Link>
          </ListItem>
          <ListItem>
            <Link>View Jobs</Link>
          </ListItem>
          <ListItem>
            <Link>Add Job</Link>
          </ListItem>
          <ListItem>
            <Link>Edit Job</Link>
          </ListItem>
          <ListItem>
            <Link>Users</Link>
          </ListItem>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={10} className={classes.pageContainer}>
        <Paper>asd</Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
