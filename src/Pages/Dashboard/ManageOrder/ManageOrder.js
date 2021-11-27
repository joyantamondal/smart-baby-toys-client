import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import swal from 'sweetalert';
import { Button, CardMedia } from '@mui/material';
// import Image from 'material-ui-image'


const ManageOrder = () => {
    const [allOrders,setAllOrders] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(()=>{
        fetch("https://fierce-gorge-17477.herokuapp.com/allOrders")
        .then(res=>res.json())
        .then(data=>setAllOrders(data));

    },[control]);

const handleOrderDelete=(id)=>{
 const proceed = window.confirm('Are You Sure, You Want to Delete Order?');
 if(proceed){
    fetch(`https://fierce-gorge-17477.herokuapp.com/cancelOrder/${id}`,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount){
          setControl(!control);
          swal({
            title: "Deleted",
            text: "Order Deleted Successfully...",
            icon: "success",
            button: "Ok",
          });
        }
      })
 }

};
    return (
        <div>
            <h2 style={{}}>Total Orders: {allOrders.length}</h2>
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
          {allOrders.map((row) => (
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
              <TableCell align="right"><Button onClick={()=>handleOrderDelete(row?._id)} style={{backgroundColor:'red', color:'white'}}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            
        </div>
    );
};

export default ManageOrder;