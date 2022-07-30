import React, { useState } from 'react'
import { Product } from './types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
	ProductColumn, SaleButton, ProdImgWrapper, ProdImage, ProdImageColumn, CategoryTitle, ProductTitle
} from './ProductCardStyles';
import { Rating } from '@mui/material';
import { Button, Row, Col } from 'styles/global';


const ProductCard = (product: Product) => {
  const { id, name, rating, onRatingChange, type, curPrice, prevPrice=curPrice, onSale=false, image, isFavorite=false, onFavoriteChange = () => {} } = product;

  const [value, setValue] = useState<number | null>(2);

  return (
    <ProductColumn key={id}>
      {/* Product on sale button & Add to Favorite Button. */}
      <Row>
        <Col style={{ alignItems: 'self-start' }}>
          {onSale && <SaleButton>Sale</SaleButton>}
        </Col>
        <Col></Col>
        <Col></Col>
        <Col style={{ alignItems: 'self-end', cursor: 'pointer' }}>
          {isFavorite ? <FavoriteIcon onClick={onFavoriteChange} />: <FavoriteBorderIcon onClick={onFavoriteChange} />}
        </Col>
      </Row>

      {/* Product Image poriton. */}
      <ProdImageColumn>
        <ProdImgWrapper>
          <ProdImage src={image} />
        </ProdImgWrapper>
      </ProdImageColumn>

      {/* Product Details */}

      <Row><CategoryTitle style={{ marginBottom: '0px' }}> {type} </CategoryTitle></Row>
      <Row><ProductTitle style={{ marginBottom: '0px' }}> {name} </ProductTitle></Row>

      <Row>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={onRatingChange}
        />
      </Row>

      {/* Add to cart button */}

      <Button color='black'>
        <Row>
          <Col style={{ alignItems: 'self-start' }}>Add to Cart</Col>
          <Col style={{ alignItems: 'self-end' }}>$ {curPrice.toFixed(2)}</Col>
        </Row>
      </Button>
      
    </ProductColumn>
  )
}

export default ProductCard