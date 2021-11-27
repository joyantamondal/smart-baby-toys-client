
import { Grid } from "@mui/material";
import React from "react";
import Orders from "../Orders/Orders";


const MyOrders = () => {
  
  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
      <Orders></Orders>

    </Grid>
  </Grid>

  );
};

export default MyOrders;
