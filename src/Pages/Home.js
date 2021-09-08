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
      width: "85vw",
      position: "absolute",
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

const Home = (props) => {
  const classes = useStyles();
  const [bannerImg, setBannerImg] = useState(BannerImagePc);

  // Setting the banner image and positioning the banner text
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
        <Grid
          container
          className={classes.bannerTextContainer}
          style={bannerImg == BannerImagePc ? { top: "20%" } : { top: "7%" }}
        >
          <Grid item xs={12}>
            <div>
              <Typography variant="h4" gutterBottom>
                Imba jobs
              </Typography>
              <Typography variant="h2" color="secondary" gutterBottom>
                Created by Nurses
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
