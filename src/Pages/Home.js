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
import LogoDivider from "../Components/Images/logoDivider.png";
import BenefitsImage from "../Components/Images/benefitsImage.svg";
import aboutImage from "../Components/Images/aboutImage.svg";

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
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    maxWidth: "100vw",
  },
  bannerTextContainer: {
    width: "80vw",
    position: "absolute",
  },
  bannerButton: {
    marginTop: 60,
  },
  bannerButtonIcon: {
    marginLeft: 10,
  },

  // Divider
  logoDivider: {
    width: 40,
    margin: "auto",
    display: "block",
    marginBottom: 30,
  },
  blueDivider: {
    // position: "absolute",
    // left: 0,
    // top: -180,
    // left: -100,
    zIndex: -1,
    width: "114%",
    display: "none",
    // backgroundColor: "rgba(145, 195, 221, .4)",
  },

  // JOBS SETION
  jobsContainer: {
    marginTop: 80,
  },

  // BENEFITS
  blueBg: {
    backgroundColor: "rgba(145, 195, 221, .4)",
  },
  benefitsContainer: {
    position: "relative",
    marginTop: 150,
  },
  benefitsImage: {
    width: "100%",
  },
  benefitsText: {
    display: "flex",
    flexDirection: "column",
    height: 300,
    justifyContent: "center",
    marginTop: 50,
  },

  // ABOUT
  aboutContainer: {
    marginTop: 150,
    marginBottom: 150,
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
      {/* #################################### Main Banner ######################################################################## */}
      <Paper className={classes.bannerContainer} elevation={3}>
        <img src={bannerImg} className={classes.banner} />
        <div className={classes.overlay} />
        <Container>
          <Grid
            container
            className={classes.bannerTextContainer}
            style={
              bannerImg == BannerImagePc
                ? { top: "21%", left: "5%" }
                : { top: "5%", left: "7%" }
            }
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
        </Container>
      </Paper>

      {/* #################################### JOBS SECTION ######################################################################## */}
      <Container>
        <Grid
          container
          justifyContent="center"
          alignContent="center"
          alignItems="center"
          style={{ marginTop: "50px" }}
        >
          <Grid item xs={12}>
            <img src={LogoDivider} className={classes.logoDivider} />
            <Typography variant="h4" color="secondary" align="center">
              Available jobs
            </Typography>

            <Typography align="center" color="textPrimary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequuntur, minima.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.jobsContainer}>
        <Grid container spacing={3}>
          {jobOffers.map((job) => (
            <Grid item xs={12} sm={6} md={3} key={job.title}>
              <Card className={classes.root} elevation={1}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="City Job"
                    height="140"
                    image={job.image}
                    title="Ciy"
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
                  {/* <Button size="small" color="text">
                    Share
                  </Button> */}
                  <Button size="small" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* #################################### BENEFITS & PERKS ######################################################################## */}
      <div className={classes.blueBg}>
        <Container className={classes.benefitsContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} className={classes.benefitsText}>
              <Typography variant="h4" color="secondary" align="center">
                Benefits & Perks
              </Typography>

              <Typography align="center" color="textPrimary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur iusto fuga voluptas nulla ullam beatae qui,
                consequatur explicabo magni provident quam magnam aut dolores
                delectus quae recusandae exercitationem numquam similique.
              </Typography>
              <Typography align="center" color="textPrimary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur iusto fuga voluptas nulla ullam beatae qui.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img src={BenefitsImage} className={classes.benefitsImage} />
            </Grid>
          </Grid>
        </Container>
      </div>

      {/* #################################### ABOUT ######################################################################## */}

      <Container className={classes.aboutContainer}>
        <Grid container spacing={3} direction="row-reverse">
          <Grid item xs={12} sm={12} md={6} className={classes.benefitsText}>
            <Typography variant="h4" color="secondary" align="center">
              Why are we Imba?
            </Typography>

            <Typography align="center" color="textPrimary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur iusto fuga voluptas nulla ullam beatae qui, consequatur
              explicabo magni provident quam magnam aut dolores delectus quae
              recusandae exercitationem numquam similique.
            </Typography>
            <Typography align="center" color="textPrimary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur iusto fuga voluptas nulla ullam beatae qui, consequatur
              explicabo magni provident quam magnam aut dolores delectus quae
              recusandae exercitationem numquam similique.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <img src={aboutImage} className={classes.benefitsImage} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
