import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const ClientReview = (props) => {
    const {userName,country,rating,image,review} = props.review;
    return (
      <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ maxWidth: 333,margin:2 }}>
       
        <CardContent>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:'justify'}}>
            {review}
          </Typography>
        </CardContent>
        <CardActions>
        <CardMedia
          component="img"
          alt="green iguana"
          sx={{width:"20%",borderRadius:'100%',margin:'15px'}}
          image={image}
        />
          <Typography variant="body2" color="text.secondary">
            {userName}
          <br/>


          {country}
          <Stack spacing={1}>
     
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
    </Stack>
          <br/>

          </Typography>
        </CardActions>
      </Card>
      </Grid>

    );
};

export default ClientReview;