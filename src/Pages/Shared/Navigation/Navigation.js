import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container xs={4}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: "flex" }}
            >
              Smart Baby Toy
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button style={{ color: "white" }}>Home</Button>
            </Link>
            <Link to="/exploretoys" style={{ textDecoration: "none" }}>
              <Button style={{ color: "white" }}>Explore Toys</Button>
            </Link>
            {user?.email ? (
              <Box>
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <Button style={{ color: "white" }}>Dashboard</Button>
                </Link>
                <Button onClick={logout} style={{ color: "white" }}>
                  Logout
                </Button>
              </Box>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button style={{ color: "white" }}>Login</Button>
              </Link>
            )}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navigation;
