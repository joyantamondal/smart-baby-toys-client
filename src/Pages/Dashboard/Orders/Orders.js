import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import swal from 'sweetalert';
// import { Image } from '@mui/icons-material';
import { Button, CardMedia } from '@mui/material';
// import Image from 'material-ui-image'


const Orders = () => {
    const {user,token} = useAuth();
    const [orders,setOrders] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(()=>{
        const url = `https://fierce-gorge-17477.herokuapp.com/orders?email=${user.email}`;
        fetch(url,{
            headers:{
                'authorization': `Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(data=>setOrders(data));

    },[control,user.email,token]);

const handleOrderDelete=(id)=>{
  const proceed = window.confirm('Are you sure cancel your order?');
 if(proceed){
  fetch(`https://fierce-gorge-17477.herokuapp.com/cancelOrder/${id}`,{
    method:'DELETE',
  })
  .then(res=>res.json())
  .then(data=>{
    if(data.deletedCount){
      setControl(!control);
      swal({
        title: "Canceled",
        text: "Your Order Canceled Successfully...",
        icon: "success",
        button: "Ok",
      });
    }
  })
}

};
    return (
        <div>
            <h2 style={{}}>Your Total Orders: {orders.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Order Table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Product Image</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.customerName}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.orderName}</TableCell>
              <TableCell align="right">{row.Orderprice}$</TableCell>
              <TableCell sx={{width:'10px',height:'10px'}} align="right">
              <CardMedia
        component="img"
        height="50"
        image={row.OrderImg
        }
        alt="green iguana"
      />
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleOrderDelete(row?._id)} style={{backgroundColor:'red', color:'white'}}>Cancel</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    );
};

export default Orders;