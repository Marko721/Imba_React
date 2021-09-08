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

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
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
    marginTop: 30,
  },
  jobOffer: {
    marginTop: 30,
    height: 400,
    textAlign: "center",
  },
}));

const Home = () => {
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

  // Lists of Jobs
  const jobOffers = [
    // napraviti niz offera pa da se listaju sa mapom npr
    {
      image: "https://source.unsplash.com/random",
      title: "New York",
      text: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    },
  ];

  return (
    <div>
      {/* Main Banner */}
      <Paper className={classes.bannerContainer} elevation={5}>
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

      <Typography
        variant="h4"
        color="secondary"
        align="center"
        style={{ marginTop: "50px" }}
      >
        Check some of the available jobs
      </Typography>
      <Typography align="center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur,
        minima.
      </Typography>

      <Container>
        <Grid container spacing={3}>
          {/* {{for (let i =0; i<=4; i++ )}} */}
          <Grid item xs={6} sm={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="https://source.unsplash.com/random"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="text">
                  Share
                </Button>
                <Button size="small" color="secondary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
