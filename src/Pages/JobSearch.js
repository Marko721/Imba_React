import { Container } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

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
    minWidth: 120,
    width: "100%",
  },

  // JOBS SECTION
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
    justifyContent: "center",
    marginBottom: 50,
  },
}));

const JobSearch = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    specialty: "",
    location: "",
    shift: "",
    length: "",
    pay: 5000,
  });

  const dbApi = [
    {
      id: "1",
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800/?city,landscape",
      Specialty: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      id: "2",
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Chicago",
      State: "IL",
      Image: "https://source.unsplash.com/1200x800/?city,landscape",
      Specialty: "Nurse",
      Shift: "Day, 4x12",
      Start: "ASAP",
      Length: "4 Weeks",
    },
    {
      id: "3",
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800/?city,landscape",
      Specialty: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      id: "4",
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800/?city,landscape",
      Specialty: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      id: "5",
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800/?city,landscape",
      Specialty: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      id: "6",
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800/?city,landscape",
      Specialty: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      id: "7",
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800/?city,landscape",
      Specialty: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      id: "8",
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800/?city,landscape",
      Specialty: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
    {
      id: "9",
      Facility: "Johns Hopkins Bayview Medical Center.",
      Description: "Emergency Room RN Nights",
      City: "Baltimore",
      State: "MD",
      Image: "https://source.unsplash.com/1200x800/?city,landscape",
      Specialty: "Nurse",
      Shift: "Night, 3x12",
      Start: "November, 5",
      Length: "12 Weeks",
    },
  ];

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

      {/* GRID ITEM */}
      {dbApi.map((Job) => (
        <div className={classes.jobsWrapper} key={Job.id}>
          <Paper className={classes.jobsContainer} elevation={1}>
            <Grid container spacing={2} alignContent="center">
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
        count={100}
        shape="rounded"
        size="medium"
        className={classes.pagination}
      />
    </Container>
  );
};

export default JobSearch;
