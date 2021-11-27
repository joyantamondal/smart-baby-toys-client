import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import swal from 'sweetalert';
import { Button, CardMedia } from '@mui/material';
import UpdateProductModal from '../UpdateProductModel/UpdateProductModal';


const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);
    // const [order, setOrder] = useState({});
    const [openOrder, setOrderOpen] = React.useState(false);
    // const handleOrderOpen = () => setOrderOpen(true);
    const handleOrderClose = () => setOrderOpen(false);
    useEffect(()=>{
        fetch('https://fierce-gorge-17477.herokuapp.com/allProducts')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[control])

const handleOrderDelete=(id)=>{
 const proceed = window.confirm('Are You Sure, You Want to Delete Product?');
 if(proceed){
    fetch(`https://fierce-gorge-17477.herokuapp.com/deleteProduct/${id}`,{
        method:'DELETE',
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount){
          setControl(!control);
          swal({
            title: "Deleted",
            text: "Product Deleted Successfully...",
            icon: "success",
            button: "Ok",
          });
        }
      })
 }

};
    return (
        <div>
            <h2 style={{}}>Total Orders: {products.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Order Table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Img</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productName}
              </TableCell>
              <TableCell sx={{width:'10px',height:'10px'}} align="right">
              <CardMedia
        component="img"
        height="70"
        sx={{width:100}}
        image={row.productImg
        }
        alt="green iguana"
      />
              </TableCell>
              <TableCell align="right">
              <TextareaAutosize
      maxRows={4}
      aria-label="maximum height"
      defaultValue={row.description}
      style={{ width: 200 }}
    />
                  
                  </TableCell>
              <TableCell align="right">{row.price}$</TableCell>
              <TableCell align="right">{row.rating}</TableCell>
              <TableCell align="right">{row.stock}Pics</TableCell>
             
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right"><Button onClick={()=>handleOrderDelete(row?._id)} style={{backgroundColor:'red', color:'white'}}>Delete</Button></TableCell>
              
              {/* <TableCell align="right"><Link><Button onClick={handleOrderOpen}  style={{backgroundColor:'red', color:'white'}}>Update</Button></Link></TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <UpdateProductModal
        
        handleOrderClose={handleOrderClose}
        openOrder={openOrder}
        products={products}
      ></UpdateProductModal>
        </div>
    );
};

export default ManageProducts;