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
    margin: "auto",
    height: "90vh",
  },
  menuContainer: {
    // position: "sticky",
    // height: "90vh",
  },
  pageContainer: {},
}));

const adminLinks = [];
const userLinks = [];

const Dashboard = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.dashboardContainer}>
      <Grid item xs={12} sm={2} className={classes.menuContainer}>
        <DashboardNavbar />
      </Grid>

      <Grid item xs={12} sm={10} className={classes.pageContainer}>
        <div>{children}</div>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
