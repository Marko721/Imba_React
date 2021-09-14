import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  jobsWrapper: {
    flexGrow: 1,
    marginTop: 25,
    marginBottom: 25,
  },
  jobsContainer: {
    padding: theme.spacing(2),
    // margin: "auto",
    maxWidth: "100%",
    "&:hover": {
      backgroundColor: "rgba(145, 195, 221, .2)",
    },
  },
  image: {
    // width: 200,
    height: "100%",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 5,
  },
  iconTextContainer: {
    display: "flex",
  },
  iconText: {
    marginLeft: 5,
  },
  interestedButton: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  pagination: {
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
}));

const JobSearch = () => {
  const classes = useStyles();

  const dbApi = [
    {
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800",
      Proffesion: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Chicago",
      State: "IL",
      Image: "https://source.unsplash.com/1200x800",
      Proffesion: "Nurse",
      Shift: "Day, 4x12",
      Start: "ASAP",
      Length: "4 Weeks",
    },
    {
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800",
      Proffesion: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800",
      Proffesion: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800",
      Proffesion: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800",
      Proffesion: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800",
      Proffesion: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800",
      Proffesion: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800",
      Proffesion: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
  ];

  return (
    <Container>
      {/* FILTERS AND DASHBOARD */}

      {/* GRID ITEM */}
      {dbApi.map((Job) => (
        <div className={classes.jobsWrapper}>
          <Paper className={classes.jobsContainer} elevation={1}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4} md={3}>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt="job_search"
                    src={Job.Image}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm={8} md={9} container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom>{Job.Facility}</Typography>
                    <Typography variant="h4" color="secondary" gutterBottom>
                      {Job.Description} • {Job.City}, {Job.State}
                    </Typography>

                    <div className={classes.iconTextContainer}>
                      <i class="fas fa-user-md"></i>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.iconText}
                      >
                        {Job.Proffesion}
                      </Typography>
                    </div>
                    <div className={classes.iconTextContainer}>
                      <i class="fas fa-hourglass-half"></i>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.iconText}
                      >
                        {Job.Shift}
                      </Typography>
                    </div>
                    <div className={classes.iconTextContainer}>
                      <i class="far fa-calendar"></i>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.iconText}
                      >
                        {Job.Start}
                      </Typography>
                    </div>
                    <div className={classes.iconTextContainer}>
                      <i class="far fa-calendar-alt"></i>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        className={classes.iconText}
                      >
                        {Job.Length}
                      </Typography>
                    </div>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography variant="subtitle1">
                          $3923.00/week
                        </Typography>
                      </Grid>
                      <Grid item xs={6} className={classes.interestedButton}>
                        <Button variant="contained" color="secondary">
                          I'm interested
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}

      <Pagination
        count={10}
        shape="rounded"
        size="large"
        className={classes.pagination}
      />
    </Container>
  );
};

export default JobSearch;
