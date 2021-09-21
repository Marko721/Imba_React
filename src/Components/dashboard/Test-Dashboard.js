import React from "react";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    height: 800,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4} className={classes.menuContainer}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
