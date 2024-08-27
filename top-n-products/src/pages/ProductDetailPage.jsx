import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, Card, CardContent } from '@mui/material';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`http://20.244.56.144/test/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container className="container">
      <Card className="card">
        <CardContent className="card-content">
          <Typography variant="h4">{product.productName}</Typography>
          <Typography>Company: {product.company}</Typography>
          <Typography>Category: {product.category}</Typography>
          <Typography>Price: Rs: {product.price}</Typography>
          <Typography>Rating: {product.rating}</Typography>
          <Typography>Discount: {product.discount}%</Typography>
          <Typography>Availability: {product.availability}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetailPage;
