import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";


const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field]= value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Grid container spacing={2} sx={{display:'flex', justifyContent:'center',marginBottom:10}}>
        <Grid sx={{ mt: 8 }} item xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onBlur={handleOnChange}
              variant="standard"
            />
            <br />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onBlur={handleOnChange}
              variant="standard"
            />
            <br />
            <Button
              sx={{ width: "75%", m: 1 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button> <br />
            </NavLink>
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Logged in Successfully...</Alert>
            )}
            {authError && <Alert severity="error"></Alert>}
          </form>
          <p>
            ------------------------------------------------------------------
          </p>
          <Button onClick={handleGoogleSignIn}  variant="contained">
            Google Sign In
          </Button>
          <br />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
