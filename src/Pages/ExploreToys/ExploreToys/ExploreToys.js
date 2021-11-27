import {Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Navigation from '../../Shared/Navigation/Navigation';
import ExploreToy from '../ExploreToy/ExploreToy';



const ExploreToys = () => {
const [products] = useProducts([]);
    
    return(
    <>
    <Navigation></Navigation>
    <Box sx={{ flexGrow: 1 , marginBottom:10}}>
    <Container>
    <Typography sx={{fontWeight:500,color: '#1976D2'}} variant="h6" component="div">
        All Toys
      </Typography>
    <Typography sx={{fontWeight:600}} variant="h4" component="div">
        Choice Your Toys
      </Typography>
    <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {
        products.map(collection=><ExploreToy
        key={collection._id}
        collection={collection}
        ></ExploreToy>)
      }
    </Grid>
    </Container>
  </Box>
    </>
    );
};

export default ExploreToys;