import React from 'react';
import styled from 'styled-components';
import prodImg from '../assets/images/productImg.png';
import {Product} from '../Types';

const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  max-height: 485px;
  max-width: 305px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.07);
`;

const ProductDate = styled.div`
  grid-row: 1;
  height: 100%;
  position: relative;

  & img {
    width: 100%;
    height: 100%;
  }
`;

const Creator = styled.div`
  position: absolute;
  top: 2%;
  left: 5%;

  & h2 {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #F3F3F3;
  }

  & p {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #FFFFFF;
  }
`;

const Collection = styled.div`
  position: absolute;
  bottom: 2%;
  left: 5%;

  & p {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
  }
`;

const ProductPrice = styled.div`
  grid-row: 2;
  display: flex;
  justify-content: space-between;
`;

const Available = styled.div`
  width: fit-content;
  text-align: left;
  padding: 1rem;

  & .label {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #808080
  }

  & .value {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: black;
  }
`;

const Price = styled.div`
  width: fit-content;
  text-align: right;
  padding: 1rem;

  & .label {
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #808080
  }

  & .value {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #4747f5;
  }
`;

type Props = {
  product: Product
}

const ProductCard: React.FC<Props> = ({product}) => {
  return (
    <Card>
      <ProductDate>
        <Creator>
          <h2>created by</h2>
          <p>{product.created_by.display_name}</p>
        </Creator>
        <img alt={'product photo'} src={prodImg}/>{/* Здесь должна быть ссылка полученная с сервера*/}
        <Collection>
          <p>{product.json_nft_data.attributes[0].value}</p>
          <p>{product.json_nft_data.attributes[0].trait_type}</p>
        </Collection>
      </ProductDate>
      <ProductPrice>
        <Available>
          <p className={'label'}>available</p>
          <p className={'value'}>{product.quantity_available} of {product.quantity}</p>
        </Available>
        <Price>
          <p className={'label'}>price</p>
          <p className={'value'}>{product.initial_price} ETH</p>
        </Price>
      </ProductPrice>
    </Card>
  );
};

export default ProductCard;
