import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { NavLink ,useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();
  const {user,registerUser, isLoading,authError}= useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // all data catch which user type and set it into use state
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = e => {
    if(loginData.password!== loginData.password2){
        alert('Your Password did not match');
        return;

    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2} sx={{display:'flex',justifyContent:'center', marginBottom:10}}>
        <Grid sx={{ mt: 8 }} item xs={12} md={8}>
          <Typography variant="body1" gutterBottom>
            Register
          </Typography>
        { !isLoading &&
              <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Name"
                name="name"
                type="text"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <br />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Re-type Your Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <br />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Registered? Please Login</Button>{" "}
                <br />
              </NavLink>
            </form>
        } 
        {
            isLoading && <CircularProgress />
        }
        {
            user?.email&& <Alert severity="success">User Created Successfully...</Alert>
        }
        {
            authError && <Alert severity="error">{authError}</Alert>
        }
        </Grid>

      </Grid>
    </Container>
  );
};

export default Register;
