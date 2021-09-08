import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Button,
  Icon,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import BannerImagePc from "../Components/Images/banner_pc.jpeg";
import BannerImageMo from "../Components/Images/banner_mo.jpeg";

const useStyles = makeStyles((theme) => {
  return {
    // MAIN BANNER
    bannerContainer: {
      position: "relative",
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,.1)",
    },
    banner: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      maxWidth: "100vw",
    },
    bannerTextContainer: {
      width: "80vw",
      position: "absolute",
      left: "7%",
    },
    bannerButton: {
      marginTop: 60,
    },
    bannerButtonIcon: {
      marginLeft: 10,
    },

    // JOBS SETION
    root: {
      flexGrow: 1,
    },
  };
});

const Home = (props) => {
  const classes = useStyles();
  const [bannerImg, setBannerImg] = useState(BannerImagePc);

  // Setting the banner image for mobile or pc
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 850
        ? setBannerImg(BannerImageMo)
        : setBannerImg(BannerImagePc);
    };
    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div>
      {/* Main Banner */}
      <Paper className={classes.bannerContainer} elevation={0}>
        <img src={bannerImg} className={classes.banner} />
        <div className={classes.overlay} />
        <Grid
          container
          className={classes.bannerTextContainer}
          style={bannerImg == BannerImagePc ? { top: "20%" } : { top: "7%" }}
        >
          <Grid item xs={12}>
            <div>
              <Typography color="primary" variant="h4" gutterBottom>
                Imba jobs
              </Typography>
              <Typography variant="h2" color="secondary">
                Created by Nurses
              </Typography>
              <Typography color="primary" variant="h2" paragraph>
                For Nurses
              </Typography>
              <Typography color="primary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Typography>
              <Typography color="primary">Harum, fugiat!</Typography>

              <Button
                className={classes.bannerButton}
                size="large"
                variant="contained"
                color="secondary"
                href="#"
              >
                Get Started
                <Icon
                  // className="fal fa-arrow-right"
                  className="fad fa-chevron-right"
                  color="primary"
                  style={{ marginLeft: 15 }} // not working when putted in classes styles
                />
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>

      {/* JOBS SECTION */}
      <Typography variant="h4" align="center" style={{ marginTop: "50px" }}>
        Check some of the available jobs
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
