import React from 'react';

import { Box } from '@mui/material';
import styles from './Home.module.scss';
import ProductsContainer from 'uicontainers/ProductsContainer';
import CartContainer from 'uicontainers/CartContainer';

const Home = () => {
  return (
    <>
      {/* ProductCards List */}
      <ProductsContainer />
      {/* Shopping Cart */}
      <CartContainer />
    </>
  );
};

export default Home;
