import React from "react";
import Grid from "@material-ui/core/Grid";
import { ListItem, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  pageContainer: {},
}));

const JobEdit = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper>Edit job</Paper>
    </div>
  );
};

export default JobEdit;
