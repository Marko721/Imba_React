import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

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
}));

const JobSearch = () => {
  const classes = useStyles();
  return (
    <Container>
      {/* FILTERS AND DASHBOARD */}

      {/* GRID ITEM */}
      <div className={classes.jobsWrapper}>
        <Paper className={classes.jobsContainer} elevation={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="job_search"
                  src="https://source.unsplash.com/daily?landscape"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm={8} md={9} container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h4">
                    Johns Hopkins Bayview Medical Center.
                  </Typography>
                  <Typography variant="body2" color="secondary" gutterBottom>
                    Emergency Room RN Nights • Baltimore, MD
                  </Typography>

                  <div className={classes.iconTextContainer}>
                    <i class="fas fa-user-md"></i>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className={classes.iconText}
                    >
                      Nurse
                    </Typography>
                  </div>
                  <div className={classes.iconTextContainer}>
                    <i class="far fa-clock"></i>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className={classes.iconText}
                    >
                      Night, 3x12
                    </Typography>
                  </div>
                  <div className={classes.iconTextContainer}>
                    <i class="far fa-calendar"></i>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className={classes.iconText}
                    >
                      November, 5
                    </Typography>
                  </div>
                  <div className={classes.iconTextContainer}>
                    <i class="far fa-calendar-alt"></i>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      className={classes.iconText}
                    >
                      12 Weeks
                    </Typography>
                  </div>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    color="secondary"
                    style={{ cursor: "pointer" }}
                  >
                    I'm Interested
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">$3923.00/week</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
};

export default JobSearch;
