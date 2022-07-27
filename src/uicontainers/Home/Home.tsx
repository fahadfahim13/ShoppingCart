import React from 'react';

import { Box } from '@mui/material';
import styles from './Home.module.scss';
import ProductsContainer from 'uicontainers/ProductsContainer';

const Home = () => {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        bgcolor: 'background.paper',
      }}
      noValidate
      autoComplete="off"
      className={styles.box}
    >
      {/* ProductCards List */}
      <ProductsContainer />
      {/* Shopping Cart */}
    </Box>
  );
};

export default Home;
