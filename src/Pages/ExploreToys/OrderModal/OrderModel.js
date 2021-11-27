import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const OrderModel = ({ openOrder, handleOrderClose, order,setOrderSuccess }) => {
  const { productName, productImg,  price } =
    order;
    const {user} = useAuth();
    const initialInfo ={customerName:user.displayName, email:user.email,phone:''}
    const [orderInfo, setOrderInfo] =  React.useState(initialInfo);
  //   form submit
  const handleOnSubmit = (e) => {
    // collect data
    const order={
      ...orderInfo,
      orderName: productName,
      date: new Date().toLocaleDateString(),
      Orderprice: price,
      OrderImg: productImg,
       
    }
    
    // send to the server
    fetch('https://intense-bayou-76806.herokuapp.com/orders',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        setOrderSuccess(true);
        handleOrderClose();
      }
    })
    e.preventDefault();
  };
  // form data catch 
  const handleOnBlur=e=>{
    const field = e.target.name;
    const value = e.target.value;
    const newInfo={...orderInfo};
    newInfo[field]= value; 
    setOrderInfo(newInfo);

  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openOrder}
      onClose={handleOrderClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openOrder}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Order Confirm
          </Typography>
          <form onSubmit={handleOnSubmit}>
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={productName}
              size="small"
            />
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={price}
              size="small"
            />
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue= {productImg}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="customerName"
              onBlur={handleOnBlur}
              defaultValue={user.displayName}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="email"
              onBlur={handleOnBlur}
              defaultValue={user.email}
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="phone"
              onBlur={handleOnBlur}
              defaultValue="Phone Number"
              size="small"
            />
            <TextField
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="address"
              onBlur={handleOnBlur}
              defaultValue="Delivery Address"
              size="small"
            />
               <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              name="date"
              defaultValue={new Date().toDateString()}
              size="small"
            />

            <Button fullWidth type="submit" variant="contained">
              Confirm Order
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default OrderModel;
