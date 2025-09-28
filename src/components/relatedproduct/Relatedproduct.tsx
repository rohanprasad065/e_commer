import React, { useContext, useState } from 'react';
import './Relatedproduct.css';
import { ShopContext } from '../context/ShopContext';
import Item from '../item/Item';

const Relatedproduct = () => {
  const { all_product } = useContext(ShopContext);
  const [visibleCount, setVisibleCount] = useState(6); // show only 8 initially
  

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 8); // load 8 more each time
  };

  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {all_product.slice(0, visibleCount).map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
      {visibleCount < all_product.length && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={handleShowMore} className="show-more-btn">
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Relatedproduct;
