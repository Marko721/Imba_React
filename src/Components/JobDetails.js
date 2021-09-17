import { Paper, Typography } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import { useParams } from "react-router";
import Data from "../Components/Data";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  jobDetailsWrapper: {
    height: 1000,
    marginTop: 50,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 5,
  },
}));

const JobDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const Job = Data.jobs[id - 1];
  console.log(Job);
  //   console.log(Job[id - 1]);
  // console.log(id);
  //   const {
  //     data: blog,
  //     error,
  //     isPending,
  //   } = useFetch("http://localhost:8000/blogs/" + id);

  return (
    <div>
      <Container>
        <Paper elevation={0} className={classes.jobDetailsWrapper}>
          <Typography variant="h4">{Job.Facility}</Typography>
          <Grid container>
            <Grid item xs={12} sm={8} md={8}>
              <img className={classes.img} alt="job_search" src={Job.Image} />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
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
                  {Job.Specialty}
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
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default JobDetails;
