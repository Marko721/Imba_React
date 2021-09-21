import React from "react";
import Grid from "@material-ui/core/Grid";
import { ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  pageContainer: {},
}));

const JobsAll = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={10} className={classes.pageContainer}>
      <Paper>All jobs</Paper>
    </Grid>
  );
};

export default JobsAll;
