import React, { useState, useEffect } from 'react';
import ProductList from '../components/products';
import { Container, Typography, Select, MenuItem, Slider, FormControl, InputLabel } from '@mui/material';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['Phone', 'Laptop', 'Tablet']);
  const [companies, setCompanies] = useState(['AMZ', 'FLP', 'SUP']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory, selectedCompany, priceRange]);

  // Static product data
  const staticProducts = [
    {
      "productName": "Laptop 1",
      "price": 2236,
      "rating": 4.7,
      "discount": 63,
      "availability": "yes"
    },
    {
      "productName": "Laptop 13",
      "price": 1244,
      "rating": 4.5,
      "discount": 45,
      "availability": "out-of-stock"
    },
    {
      "productName": "Laptop 3",
      "price": 9102,
      "rating": 4.44,
      "discount": 98,
      "availability": "out-of-stock"
    },
    {
      "productName": "Laptop 11",
      "price": 2652,
      "rating": 4.12,
      "discount": 70,
      "availability": "yes"
    },
    {
      "productName": "Laptop 14",
      "price": 1258,
      "rating": 3.8,
      "discount": 33,
      "availability": "yes"
    },
    {
      "productName": "Laptop 13",
      "price": 8686,
      "rating": 3.22,
      "discount": 24,
      "availability": "out-of-stock"
    },
    {
      "productName": "Laptop 14",
      "price": 9254,
      "rating": 3,
      "discount": 56,
      "availability": "yes"
    },
    {
      "productName": "Laptop 10",
      "price": 1059,
      "rating": 2.77,
      "discount": 21,
      "availability": "yes"
    },
    {
      "productName": "Laptop 10",
      "price": 7145,
      "rating": 2.74,
      "discount": 15,
      "availability": "yes"
    },
    {
      "productName": "Laptop 10",
      "price": 4101,
      "rating": 2.67,
      "discount": 37,
      "availability": "out-of-stock"
    }
  ];

  const fetchProducts = () => {
    // Use static products data
    const filteredProducts = staticProducts.filter(product => 
      (product.price >= priceRange[0] && product.price <= priceRange[1]) &&
      (product.availability === 'yes') // Simplified for demonstration
    );

    // Update state with filtered products
    setProducts(filteredProducts);
    setError(null);
  };

  return (
    <Container className="container">
      <Typography variant="h4" gutterBottom>Top Products</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Company</InputLabel>
        <Select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {companies.map(company => (
            <MenuItem key={company} value={company}>{company}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Slider
        value={priceRange}
        onChange={(e, newValue) => setPriceRange(newValue)}
        valueLabelDisplay="auto"
        min={0}
        max={10000}
        aria-labelledby="price-range-slider"
        margin="normal"
      />
      {error && <Typography color="error">{error}</Typography>}
      <ProductList products={products} />
    </Container>
  );
};

export default AllProductsPage;
