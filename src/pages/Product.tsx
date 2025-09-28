import React, { useContext } from 'react'
import { ShopContext } from '../components/context/ShopContext'
import { useParams } from 'react-router-dom';
import Bredcrum from '../components/bredcrum/Bredcrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay';
import Description from '../components/description/Description';
import Relatedproduct from '../components/relatedproduct/Relatedproduct';

export const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id ===Number(productId))
  if (!product) return <div>Loading...</div>;
  return (
    <div>
      <Bredcrum product={product}/>
      <ProductDisplay product ={product}/>
      <Description />
      <Relatedproduct/>
    </div>
  )
}
