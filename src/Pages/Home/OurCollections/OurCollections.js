import {  Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../../hooks/useProducts';
import OurCollection from '../../Home/OurCollection/OurCollection'




const OurCollections = () => {
const [products] = useProducts([]);
    
    return(
    <Box sx={{ flexGrow: 1 , marginBottom:10}}>
    <Container>
    <Typography sx={{fontWeight:500,color: '#1976D2'}} variant="h6" component="div">
       Our Collection
      </Typography>
    <Typography sx={{fontWeight:600}} variant="h4" component="div">
        Choice Your Toys
      </Typography>
    <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {
        products.slice(0,6).map(collection=><OurCollection
        key={collection._id}
        collection={collection}
        ></OurCollection>)
        
      }
    </Grid>
    </Container>
  </Box>
    );
};

export default OurCollections;