import React from "react";
import Grid from "@material-ui/core/Grid";
import { ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

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

const DashboardNavbar = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={2} className={classes.menuContainer}>
      <Paper>
        <ListItem>
          <Link to="/dashboard/">Interests</Link>
        </ListItem>
        <ListItem>
          <Link to="/dashboard/all_jobs">View Jobs</Link>
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
  );
};

export default DashboardNavbar;
