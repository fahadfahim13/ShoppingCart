import React, { useState } from 'react'
import { Product } from './types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
	ProductColumn, SaleButton, Row, Col
} from './ProductCardStyles';


const ProductCard = () => {
  // const { id, onSale } = product;

  const [favoriteClicked, setfavoriteClicked] = useState(false)

  const onFavoriteClick = () => {
    setfavoriteClicked((prev) => !prev);
  }

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
      
    </ProductColumn>
  )
}

export default ProductCard