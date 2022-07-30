import React, { useState } from 'react'
import { Product } from './types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
	ProductColumn, SaleButton, ProdImgWrapper, ProdImage, ProdImageColumn, CategoryTitle, ProductTitle
} from './ProductCardStyles';

import airpods from 'media/images/airpods.jpg';
import { Rating } from '@mui/material';
import { Button, Row, Col } from 'styles/global';


const ProductCard = () => {
  // const { id, onSale } = product;

  const [favoriteClicked, setfavoriteClicked] = useState(false)

  const onFavoriteClick = () => {
    setfavoriteClicked((prev) => !prev);
  }

  const [value, setValue] = useState<number | null>(2);

  return (
    <ProductColumn>
      {/* Product on sale button & Add to Favorite Button. */}
      <Row>
        <Col style={{ alignItems: 'self-start' }}>
          <SaleButton>Sale</SaleButton>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col style={{ alignItems: 'self-end', cursor: 'pointer' }}>
          {favoriteClicked ? <FavoriteIcon onClick={onFavoriteClick} />: <FavoriteBorderIcon onClick={onFavoriteClick} />}
        </Col>
      </Row>

      {/* Product Image poriton. */}
      <ProdImageColumn>
        <ProdImgWrapper>
          <ProdImage src={airpods} />
        </ProdImgWrapper>
      </ProdImageColumn>

      {/* Product Details */}

      <Row><CategoryTitle style={{ marginBottom: '0px' }}>Electronics</CategoryTitle></Row>
      <Row><ProductTitle style={{ marginBottom: '0px' }}>Airpods 2nd Gen</ProductTitle></Row>

      <Row>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue: number | null) => {
            setValue(newValue);
          }}
        />
      </Row>

      {/* Add to cart button */}

      <Button color='black'>
        <Row>
          <Col style={{ alignItems: 'self-start' }}>Add to Cart</Col>
          <Col style={{ alignItems: 'self-end' }}>$ 1795</Col>
        </Row>
      </Button>
      
    </ProductColumn>
  )
}

export default ProductCard