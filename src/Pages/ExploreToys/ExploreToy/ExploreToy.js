import { Button, Card, CardActions, CardContent, CardMedia, Grid, Rating, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
const  cardStyle = {
  display: 'block',
  width: '90%',
  transitionDuration: '0.3s',
  height: '100%'
}

const ExploreToy = ({collection}) => {
    const {productName, productImg,description,price,rating } = collection;
    return (
     <>
        <Grid item xs={4} sm={4} md={4} sx={{marginTop:5}}>
        <Card style={cardStyle}>
      <CardMedia
        component="img"
        style={{width:'300px', height:'150px', margin:'0 auto'}}
        image={productImg}
        alt="product images"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
      <Typography gutterBottom sx={{marginRight:'auto'}} variant="h5" component="div">
          Price: {price} $
        </Typography>
        <Stack spacing={1}>
      
      <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
    
    </Stack>
     
      </CardActions>
      <CardActions>
        {
          <Link to={`/order/${collection._id}`} style={{textDecoration:'none'}}>
            <Button variant="contained" fullWidth>Order Now</Button>
          </Link>
        }
      </CardActions>
    </Card>
    </Grid>
     </>
    );
};

export default ExploreToy;