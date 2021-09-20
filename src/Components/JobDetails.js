import { Button, Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router";
import Data from "../Components/Data";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  jobDetailsWrapper: {
    marginTop: 50,
    marginBottom: 50,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: 5,
  },
  jobRequirementsWrapper: {
    boxSizing: "border-box",
    height: "100%",
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "rgba(145, 195, 221, .15)",
  },
  iconTextContainer: {
    display: "flex",
  },
  iconText: {
    marginLeft: 5,
  },
}));

const JobDetails = () => {
  const classes = useStyles();
  const { id } = useParams();
  const Job = Data.jobs[id - 1];
  //   console.log(Job.Image);
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
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={8}>
              <img
                className={classes.img}
                alt={`${Job.Facility}`}
                src={Job.Image}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Paper elevation={2} className={classes.jobRequirementsWrapper}>
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
                    Specialty: {Job.Specialty}
                  </Typography>
                </div>
                <div className={classes.iconTextContainer}>
                  <i class="fas fa-hourglass-half"></i>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.iconText}
                  >
                    Shift: {Job.Shift}
                  </Typography>
                </div>
                <div className={classes.iconTextContainer}>
                  <i class="far fa-calendar"></i>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.iconText}
                  >
                    Start date: {Job.Start}
                  </Typography>
                </div>
                <div
                  className={classes.iconTextContainer}
                  style={{ marginBottom: 15 }}
                >
                  <i class="far fa-calendar-alt"></i>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    className={classes.iconText}
                    gutterBottom
                  >
                    Contract length: {Job.Length}
                  </Typography>
                </div>
                <Typography variant="h4">Application Requirements</Typography>
                <Typography gutterBottom>• MA License</Typography>
                <Typography gutterBottom>• BLS Certification</Typography>
                <Typography gutterBottom>• 2 Years of RN Experience</Typography>
                <Typography gutterBottom>• Oncology Specialty</Typography>

                <Button variant="contained" color="secondary">
                  Apply to job
                </Button>
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Job Description
              </Typography>
              <Typography gutterBottom>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, dolorum.
              </Typography>
              <Typography gutterBottom>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, dolorum.
              </Typography>
              <Typography gutterBottom>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, dolorum.
              </Typography>
              <Typography gutterBottom>
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat dolorem illum voluptas delectus expedita quisquam
                aliquam. Ipsa, veritatis odit. Quidem voluptates deserunt
                possimus magni labore, id iure, quaerat minima nobis, aliquam
                soluta. Accusantium optio consequuntur nobis, consectetur odio
                deserunt inventore corrupti veniam debitis aliquam alias. Quis
                quae praesentium repellendus? Architecto!
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Similiar jobs
              </Typography>
              <Typography gutterBottom>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, dolorum.
              </Typography>
              <Typography gutterBottom>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, dolorum.
              </Typography>
              <Typography gutterBottom>
                • Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, dolorum.
              </Typography>
              <Typography gutterBottom>
                • Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellat dolorem illum voluptas delectus expedita quisquam
                aliquam. Ipsa, veritatis odit. Quidem voluptates deserunt
                possimus magni labore, id iure, quaerat minima nobis, aliquam
                soluta. Accusantium optio consequuntur nobis, consectetur odio
                deserunt inventore corrupti veniam debitis aliquam alias. Quis
                quae praesentium repellendus? Architecto!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default JobDetails;
