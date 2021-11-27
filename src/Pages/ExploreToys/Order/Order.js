import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navigation from "../../Shared/Navigation/Navigation";
import OrderModel from "../OrderModal/OrderModel";

const Order = () => {
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { orderId } = useParams();
  const [order, setOrder] = useState({});
  const [openOrder, setOrderOpen] = React.useState(false);
  const handleOrderOpen = () => setOrderOpen(true);
  const handleOrderClose = () => setOrderOpen(false);
  useEffect(() => {
    fetch(`https://intense-bayou-76806.herokuapp.com/singleProduct/${orderId}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [orderId]);

  return (
    <>
    <Navigation></Navigation>
      <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
        <Container>
          {orderSuccess && (
            <Alert
              severity="success"
              sx={{ display: "flex", justifyContent: "center", margin: 2 }}
            >
              Order Placed Succesfully
            </Alert>
          )}
          <Typography
            sx={{
              fontWeight: 600,
              display: "flex",
              justifyContent: "center",
              color: "green",
            }}
            variant="h4"
            component="div"
          >
            Welcome To Place Order Page
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={4} sm={4} md={4}>
              <Card sx={{ maxWidth: 350, maxHeight: 400, margin: 3 }}>
                <CardMedia
                  component="img"
                  style={{ width: "300px", height: "150px", margin: "0 auto" }}
                  image={order.productImg}
                  alt="product images"
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div">
                    {order.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {order.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography
                    gutterBottom
                    sx={{ marginRight: "auto" }}
                    variant="h5"
                    component="div"
                  >
                    Price: {order.price} $
                  </Typography>
                  <Stack spacing={1}>
                    <Rating
                      name="half-rating-read"
                      value={parseFloat(order.rating)}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                </CardActions>
                <CardActions>
                  {
                   

                    <Button
                      onClick={handleOrderOpen}
                      variant="contained"
                      fullWidth
                    >
                      Order Now
                    </Button>
                  }
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <OrderModel
        setOrderSuccess={setOrderSuccess}
        handleOrderClose={handleOrderClose}
        openOrder={openOrder}
        order={order}
      ></OrderModel>
    </>
  );
};

export default Order;
