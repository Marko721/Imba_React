import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import validator from "validator";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "700px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const classes = useStyles();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    // VALIDATION
    if (firstname.length < 2) {
      setError(true);
      setErrorMessage("First Name must have more than 2 characters");
    }
    if (firstname.length > 16) {
      setError(true);
      setErrorMessage("First Name must have less than 16 characters");
    }
    if (validator.contains(firstname, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])) {
      setError(true);
      setErrorMessage("First Name cannot have numbers");
    }
    if (lastname.length < 2) {
      setError(true);
      setErrorMessage("Last Name must have more than 2 characters");
    }
    if (lastname.length > 16) {
      setError(true);
      setErrorMessage("Last Name must have less than 16 characters");
    }
    if (!validator.isEmail(email)) {
      setError(true);
      setErrorMessage("Enter correct Email address");
    }
    if (password.length < 6) {
      setError(true);
      setErrorMessage("Password must have more than 6 characters");
    }

    if (!error) {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/auth/register",
          {
            firstname,
            lastname,
            email,
            password,
            phone,
          }
        );
        res.data && window.location.replace("/login");
      } catch (err) {
        setError(true);
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>

        {error && (
          <Typography>
            <span style={{ color: "coral" }}>{errorMessage}</span>
          </Typography>
        )}

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                color="secondary"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                color="secondary"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                color="secondary"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                color="secondary"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                color="secondary"
                fullWidth
                name="phone"
                label="Phone (optional)"
                type="phone"
                id="phone"
                autoComplete="current-phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={(e) => handleSubmit(e)}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" style={{ color: "grey" }}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
