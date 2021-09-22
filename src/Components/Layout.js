import { makeStyles } from "@material-ui/core";
import React from "react";
import Navbar from "../Components/Navbar.js";
import Footer from "../Components/Footer.js";

// Custom CSS
const useStyles = makeStyles((theme) => {
  return {
    // BODY CSS
    page: {
      // backgroundColor: "green",
      // width: "80vw",
      // padding: 5,
    },
  };
});

// COMPONENT
const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />

      {/* BODY */}
      <div className={classes.page}>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
