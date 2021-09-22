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

const adminLinks = [
  {
    text: "Job Applications",
    path: "/dashboard",
  },
  {
    text: "All Jobs",
    path: "/dashboard/all_jobs",
  },
  {
    text: "Add Job",
    path: "/dashboard/add_job",
  },
  {
    text: "Edit Job",
    path: "/dashboard/edit_job",
  },
  {
    text: "Users",
    path: "/dashboard/users",
  },
];
const userLinks = [
  {
    text: "Applied Jobs",
    path: "/dashboard/jobs",
  },
];

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
