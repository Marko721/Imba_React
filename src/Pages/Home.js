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
      width: "80vw",
      position: "absolute",
      top: "15%",
      left: "7%",
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
      {/* Main Banner */}
      <Paper className={classes.bannerContainer} elevation={0}>
        <img src={BannerImagePc} className={classes.banner} />
        <Grid container className={classes.bannerTextContainer}>
          <Grid item xs={12}>
            <div>
              <Typography variant="h4" gutterBottom>
                Imba jobs
              </Typography>
              <Typography variant="h2" color="secondary" gutterBottom>
                Provided by Nurses
              </Typography>
              <Typography variant="h2" paragraph>
                For Nurses
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
    </div>
  );
};

export default Home;
