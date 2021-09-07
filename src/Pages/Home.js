import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import BannerImage from "../Components/Images/banner-custom.jpeg";

const useStyles = makeStyles((theme) => {
  return {
    banner: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      maxWidth: "100vw",
    },
  };
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <img src={BannerImage} className={classes.banner} alt="" />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} lg={6} md={3}></Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
