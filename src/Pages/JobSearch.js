import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  jobs: {
    flexGrow: 1,
    marginTop: 25,
    marginBottom: 25,
  },
  paper: {
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
}));

const JobSearch = () => {
  const classes = useStyles();
  return (
    <Container>
      {/* SIDEBAR FILTERS AND DASHBOARD */}

      {/* GRID ITEM */}
      <div className={classes.jobs}>
        <Paper className={classes.paper} elevation={1}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={3}>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
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
                  <Typography variant="body2" color="textSecondary">
                    ID: 1030114
                  </Typography>
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
