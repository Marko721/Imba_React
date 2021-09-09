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
  jobOffer: {
    marginTop: 30,
    height: 400,
    textAlign: "center",
  },
  root: {
    flexGrow: 1,
  },
  jobPreviews: {
    marginTop: 70,
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

  // Lists of Jobs Preview
  const jobOffers = [
    // napraviti niz offera pa da se listaju sa mapom npr
    {
      image: "https://source.unsplash.com/weekly?city, blue",
      title: "New York",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, rem.",
    },
    {
      image: "https://source.unsplash.com/daily?city, blue",
      title: "Boston",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, rem.",
    },
    {
      image: "https://source.unsplash.com/weekly?city, panorama, blue",
      title: "Chicago",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, rem.",
    },
    {
      image: "https://source.unsplash.com/daily?city, bridge, blue",
      title: "Fargo",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, rem.",
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

      <Typography align="center" color="textPrimary">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur,
        minima.
      </Typography>

      <Container className={classes.jobPreviews}>
        <Grid container spacing={3}>
          {jobOffers.map((job) => (
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={job.image}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {job.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {job.text}
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
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
