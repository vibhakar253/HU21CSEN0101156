import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';



const products = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              height="140"
              alt={product.productName}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {product.productName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: Rs {product.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rating: {product.rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discount: {product.discount}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Availability: {product.availability}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default products;
