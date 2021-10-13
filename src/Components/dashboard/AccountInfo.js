import React from "react";
import Grid from "@material-ui/core/Grid";
import { ListItem, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Dashboard from "./Dashboard";

const useStyles = makeStyles((theme) => ({
  pageContainer: {},
}));

const AccountInfo = () => {
  const classes = useStyles();

  return (
    <div>
      <Dashboard />

      <Typography>My Account</Typography>
    </div>
  );
};

export default AccountInfo;
