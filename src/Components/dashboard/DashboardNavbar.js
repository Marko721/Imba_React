import React from "react";
import Grid from "@material-ui/core/Grid";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Toolbar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: "rgba(145, 195, 221, .15)",
  },
  inactive: {
    textDecoration: "none",
    color: "#676767",
  },
  active: {
    color: "#6ca6c5",
  },
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
  const history = useHistory();
  const location = useLocation();

  return (
    <List>
      {adminLinks.map((link) => (
        <ListItem
          button
          key={link.text}
          onClick={() => history.push(link.path)}
        >
          <ListItemText
            className={
              location.pathname == link.path ? classes.active : classes.inactive
            }
            primary={link.text}
          ></ListItemText>
          {/* {link.text} */}
        </ListItem>
      ))}
    </List>
  );
};

export default DashboardNavbar;
