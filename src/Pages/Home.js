import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  Button,
  Icon,
} from "@material-ui/core";
import React from "react";
import BannerImagePc from "../Components/Images/banner_pc.jpeg";
import BannerImageMo from "../Components/Images/banner_mo1.jpeg";

const useStyles = makeStyles((theme) => {
  return {
    bannerContainer: {
      position: "relative",
    },
    banner: {
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      maxWidth: "100vw",
    },
    bannerTextContainer: {
      position: "absolute",
      top: "20%",
      left: "5%",
    },
    bannerButton: {
      marginTop: 60,
    },
    bannerButtonIcon: {
      marginLeft: 10,
    },
  };
});

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.bannerContainer}>
        <img src={BannerImagePc} className={classes.banner} />
        <div className={classes.overlay} />
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className={classes.bannerTextContainer}>
              <Typography variant="h2" color="secondary" gutterBottom>
                Created by Nurses
              </Typography>
              <Typography variant="h2" color="text.main" paragraph>
                - For Nurses
              </Typography>
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

      {/* <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.bannerContainer}>
              <img src={BannerImagePc} className={classes.banner} alt="" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.bannerTextContainer}>
              <Typography
                variant="h2"
                color="secondary"
                className={classes.bannerText}
              >
                Created by Nurses for Nurses
              </Typography>
            </Paper>
          </Grid>
        </Grid> */}
    </div>
  );
};

export default Home;
