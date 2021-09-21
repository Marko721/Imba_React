import React from "react";
import Grid from "@material-ui/core/Grid";
import { ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";

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

const Dashboard = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.dashboardContainer}>
      <DashboardNavbar />

      <div>{children}</div>
    </Grid>
  );
};

export default Dashboard;
