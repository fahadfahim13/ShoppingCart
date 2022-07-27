import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from 'components/ProductCard';

const ProductsContainer = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {Array.from(Array(8)).map((_, index) => (
        <Grid item xs={3} sm={3} md={3} key={index}>
          <ProductCard />
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductsContainer