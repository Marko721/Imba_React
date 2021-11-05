import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  jobsWrapper: {
    flexGrow: 1,
    marginTop: 25,
    marginBottom: 25,
  },
  jobsContainer: {
    padding: theme.spacing(2),
    maxWidth: "100%",
    "&:hover": {
      backgroundColor: "rgba(145, 195, 221, .2)",
    },
    cursor: "pointer",
  },
  image: {
    // width: 200,
    // height: "100%",
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
}));

const JobCards = ({ Jobs }) => {
  const classes = useStyles();
  // const history = useHistory();
  // const location = useLocation();

  return (
    <div>
      {Jobs.map((Job) => (
        <div className={classes.jobsWrapper} key={Job.id}>
          <Link to={`/jobs/` + Job.id} style={{ textDecoration: "none" }}>
            <Paper
              className={classes.jobsContainer}
              elevation={1}
              // onClick={() => history.push(`/job/${Job.id}`)}
            >
              <Grid container spacing={2} alignContent="center">
                <Grid item xs={12} sm={4} md={3}>
                  {/* <ButtonBase className={classes.image}> */}
                  <img
                    className={classes.img}
                    alt="job_search"
                    src={Job.Image}
                  />
                  {/* </ButtonBase> */}
                </Grid>
                <Grid item xs={12} sm={8} md={9} container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom>{Job.Facility}</Typography>
                      <Typography variant="h4" color="secondary" gutterBottom>
                        {Job.Description} • {Job.City}, {Job.State}
                      </Typography>

                      <div className={classes.iconTextContainer}>
                        <i className="fas fa-user-md"></i>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className={classes.iconText}
                        >
                          {Job.Specialty}
                        </Typography>
                      </div>
                      <div className={classes.iconTextContainer}>
                        <i className="fas fa-hourglass-half"></i>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className={classes.iconText}
                        >
                          {Job.Shift}
                        </Typography>
                      </div>
                      <div className={classes.iconTextContainer}>
                        <i className="far fa-calendar"></i>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          className={classes.iconText}
                        >
                          {Job.Start}
                        </Typography>
                      </div>
                      <div className={classes.iconTextContainer}>
                        <i className="far fa-calendar-alt"></i>
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
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobCards;
