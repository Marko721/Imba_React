import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
// import Data from "..//Data";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    // backgroundColor: "rgba(145, 195, 221, .15)",
  },
  menuLinks: {
    textAlign: "center",
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
    text: "Account info",
    path: "/dashboard/account_info",
  },
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
    text: "Account info",
    path: "/dashboard/account_info",
  },
  {
    text: "Applied Jobs",
    path: "/dashboard/jobs",
  },
];

const DashboardNavbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  // const user = Data.users;

  // const [userAdmin, setUserAdmin] = useState("");

  // useEffect(() => {
  //   if (user.Role === "admin") {
  //     setUserAdmin("admin");
  //   } else {
  //     setUserAdmin("user");
  //   }
  // });

  return (
    <List>
      {adminLinks.map((link) => (
        <ListItem
          className={classes.menuLinks}
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
