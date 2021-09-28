import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import DashboardNavbar from "./DashboardNavbar";

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    width: "100%",
    padding: 10,
    margin: "auto",
    height: "100%",
  },
  menuContainer: {
    // position: "sticky",
    height: "100%",
    backgroundColor: "rgba(145, 195, 221, .15)",
  },
  pageContainer: {
    height: "85vh",
  },
}));

const adminLinks = [];
const userLinks = [];

const Dashboard = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.dashboardContainer}>
      <Grid item xs={12} sm={4} md={2}>
        <Paper className={classes.menuContainer}>
          <DashboardNavbar />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={8} md={10}>
        <Paper className={classes.pageContainer}>{children}</Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
