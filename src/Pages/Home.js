import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import BannerImagePc from "../Components/Images/banner_pc.jpeg";
import BannerImageMo from "../Components/Images/banner_mo1.jpeg";

const useStyles = makeStyles((theme) => {
  return {
    banner: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      maxWidth: "100vw",
      // position: "absolute",
    },
  };
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <img src={BannerImagePc} className={classes.banner} alt="" />
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} lg={6} md={3}>
            <Typography>Created by Nurses for Nurses</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
