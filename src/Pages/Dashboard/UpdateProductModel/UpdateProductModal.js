import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
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
const UpdateProductModal = ({ products,openOrder, handleOrderClose,setOrderSuccess }) => {
  const { productName, rating ,_id} = products;

    console.log(products)
    
  //   form submit
  const handleOnSubmit = (e) => {

    
    // send to the server
   
    
        setOrderSuccess(true);
        handleOrderClose();
      
    e.preventDefault();
  };
  console.log(_id)
  // form data catch 
  const handleOnBlur=e=>{
    // const field = e.target.name;
    // const value = e.target.value;
    // const newInfo={...orderInfo};
    // newInfo[field]= value; 
    // setOrderInfo(newInfo);

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
            Update Product
          </Typography>
          <form onSubmit={handleOnSubmit}>
            <TextField
            //   disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={productName}
              size="small"
            />
            <TextField
            //   disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue={products.price}
              size="small"
            />
            <TextField
              disabled
              sx={{ width: "90%", m: 1 }}
              id="outlined-size-small"
              defaultValue= {rating}
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
              Update
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default UpdateProductModal;
