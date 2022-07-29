import React from 'react';

import { Box } from '@mui/material';
import styles from './Home.module.scss';
import ProductsContainer from 'uicontainers/ProductsContainer';

const Home = () => {
  return (
    <>
      {/* ProductCards List */}
      <ProductsContainer />
      {/* Shopping Cart */}
    </>
  );
};

export default Home;
