import React from "react";
import Grid from "@material-ui/core/Grid";
import { ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  pageContainer: {},
}));

const JobsActive = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper>Add Job</Paper>
    </div>
  );
};

export default JobsActive;
