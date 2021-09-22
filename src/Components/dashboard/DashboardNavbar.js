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
    <Paper>
      <ListItem>
        <Link to="/dashboard/">Job Applications</Link>
      </ListItem>
      <ListItem>
        <Link to="/dashboard/all_jobs">All Jobs</Link>
      </ListItem>

      <ListItem>
        <Link to="/dashboard/add_job">Add Job</Link>
      </ListItem>
      <ListItem>
        <Link to="/dashboard/edit_job">Edit Job</Link>
      </ListItem>
      <ListItem>
        <Link to="/dashboard/users">Users</Link>
      </ListItem>
    </Paper>
  );
};

export default DashboardNavbar;
