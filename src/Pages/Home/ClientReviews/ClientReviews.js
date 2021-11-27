import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ClientReview from '../ClientReview/ClientReview';


const ClientReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(()=>{
      fetch('https://intense-bayou-76806.herokuapp.com/reviews')
      .then(res=>res.json())
      .then(data=>setReviews(data))
  },[])
    return (
        <Box sx={{ flexGrow: 1 , marginBottom:10, marginTop:10}}>
        <Container>
       <Box sx={{textAlign:'left', marginLeft:2}}>
       <Typography sx={{fontWeight:500,color: '#1976D2'}} variant="h6" component="div">
            Customer Review
          </Typography>
        <Typography sx={{fontWeight:600, paddingBottom:5}} variant="h4" component="div">
            What's Our Customer Says
          </Typography>
       </Box>
        <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            reviews.map(review=><ClientReview 
                key={review._id}
                review={review}>
                 </ClientReview>)
          }
        </Grid>
        </Container>
      </Box>
    );
};

export default ClientReviews;


// https://i.ibb.co/K6jRPKB/generated-photos-5e6853026d3b380006e5ded1.jpg
// https://i.ibb.co/NFgBCsj/generated-photos-5e6801a16d3b380006d3c6c1.jpg
// https://i.ibb.co/Sxn1x27/generated-photos-5e6887856d3b380006f1cc4f.jpg
// https://i.ibb.co/GkJzwfz/generated-photos-5e6888c86d3b380006f215bf.jpg