import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import {useAppSelector} from '../redux/hooks';
import {Product} from '../Types';

const ProdCatalog = styled.div`
  height: 100%;
  @media screen and (min-width: 575px) {
    padding: 2rem;
  }
`;

const Title = styled.h1`  
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  color: #000000;
`;

const Paragraph = styled.p`
  margin-top: 24px;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #828282;
`;

const ProductList = styled.div`
  margin-top: 2rem;
  max-height: 100%;
  display: flex;
  flex-direction: column;  
  gap: 0.5rem;
  align-items: center;  
  overflow-y: auto;
  @media screen and (min-width: 575px) {
    flex-direction: row;
  }
`;

const Catalog: React.FC = () => {
  const productList = useAppSelector( (state) => state.product.productList);
  return (
    <ProdCatalog>
      <Title>Explore</Title>
      <Paragraph>Buy and sell digital fashion NFT art</Paragraph>
      <ProductList>
        { productList.map((item: Product) => <ProductCard key={item.product_id} product={item}/>)}
      </ProductList>
    </ProdCatalog>
  );
};

export default Catalog;
