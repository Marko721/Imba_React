import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import JobCards from "../Components/JobCards";
import Data from "../Components/Data";

const useStyles = makeStyles((theme) => ({
  //FILTERS SECTION
  filtersWrapper: {
    backgroundColor: "rgba(145, 195, 221, .15)",
    marginTop: 50,
    padding: 15,
    "& button": {
      width: "100%",
      height: "100%",
    },
  },
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 120,
    width: "100%",
  },

  pagination: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 50,
  },
}));

const JobSearch = () => {
  const jobsData = Data.jobs;
  const classes = useStyles();

  const [state, setState] = React.useState({
    specialty: "",
    location: "",
    shift: "",
    length: "",
    pay: 5000,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });

    console.log(state);
  };

  const handleFilterReset = () => {
    // setState({
    //   ...state,
    //   [specialty]: "",
    //   [location]: "",
    //   [shift]: "",
    //   [length]: "",
    //   [pay]: 5000,
    // });
  };

  return (
    <Container>
      {/* FILTERS AND DASHBOARD */}
      {/* SPECIALTY */}
      <Paper elevation={1} className={classes.filtersWrapper}>
        <Typography variant="subtitle1" gutterBottom>
          Filter by:
        </Typography>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6} md={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="specialties" color="secondary">
                Specialties
              </InputLabel>
              <Select
                native
                color="secondary"
                value={state.specialty}
                onChange={handleChange}
                label="Specialties"
                inputProps={{
                  name: "specialty",
                  id: "specialties",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Nurse"}>Nurse</option>
                <option value={"Doctor"}>Doctor</option>
                <option value={"ICU"}>ICU</option>
              </Select>
            </FormControl>
          </Grid>

          {/* LOCATION */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="location" color="secondary">
                Location
              </InputLabel>
              <Select
                native
                color="secondary"
                value={state.location}
                onChange={handleChange}
                label="Location"
                inputProps={{
                  name: "location",
                  id: "location",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Chicago, IL"}>Chicago, IL</option>
                <option value={"Florida"}>Florida</option>
                <option value={"Miami, FL"}>Miami, Fl</option>
              </Select>
            </FormControl>
          </Grid>

          {/* SHIFT */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="shift" color="secondary">
                Shift
              </InputLabel>
              <Select
                native
                color="secondary"
                value={state.shift}
                onChange={handleChange}
                label="Shift"
                inputProps={{
                  name: "shift",
                  id: "shift",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Day, 4x12"}>Day, 4x12</option>
                <option value={"Night, 3x12"}>Night, 3x12</option>
                <option value={"Night, 5x12"}>Night, 5x12</option>
              </Select>
            </FormControl>
          </Grid>

          {/* LENGHT */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="length" color="secondary">
                Length
              </InputLabel>
              <Select
                native
                color="secondary"
                value={state.length}
                onChange={handleChange}
                label="Length"
                inputProps={{
                  name: "length",
                  id: "length",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"4 weeks"}>4 weeks</option>
                <option value={"8 weeks"}>8 weeks</option>
                <option value={"12 weeks"}>12 weeks</option>
              </Select>
            </FormControl>
          </Grid>

          {/* PAY */}
          <Grid item xs={12} sm={6} md={2}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="pay" color="secondary">
                Pay
              </InputLabel>
              <Select
                native
                color="secondary"
                value={state.pay}
                onChange={handleChange}
                label="Pay"
                inputProps={{
                  name: "pay",
                  id: "pay",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"$2000/week"}>$2000/week</option>
                <option value={"$4000/week"}>$4000/week</option>
                <option value={"$5000/week"}>$5000/week</option>
              </Select>
            </FormControl>
          </Grid>

          {/* SEARCH AND RESET */}
          <Grid item xs={12} sm={12} md={1}>
            <Button variant="outlined" onClick={handleFilterReset()}>
              Clear
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <Button variant="contained" color="secondary">
              Search
            </Button>
          </Grid>
        </Grid>
        {/* NUMBER AND SORT */}
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          {/* Number of results */}
          <Grid item xs={6}>
            <Typography variant="subtitle2" color="secondary">
              Search through 1245 results
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="sort" color="secondary">
                Sort by
              </InputLabel>
              <Select
                native
                color="secondary"
                value={state.sort}
                onChange={handleChange}
                label="Sort"
                inputProps={{
                  name: "sort",
                  id: "sort",
                }}
              >
                <option aria-label="None" value="" />
                <option value={"Name"}>Name</option>
                <option value={"Pay_high"}>Pay (High to low)</option>
                <option value={"Pay_low"}>Pay (Low to high)</option>
                <option value={"Length"}>Length</option>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

      {/* JOB GRID ITEM */}
      <JobCards Jobs={jobsData} />

      <Pagination
        count={100}
        shape="rounded"
        size="medium"
        className={classes.pagination}
      />
    </Container>
  );
};

export default JobSearch;
