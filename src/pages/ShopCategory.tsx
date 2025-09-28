import React, { useContext } from 'react'
import './css/Shopcategory.css'
import { ShopContext } from '../components/context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/item/Item'

export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />

      <div className='shopcategory-indexsort'>
        <p>
          <span>Showing 1–12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <img src={dropdown_icon} alt="Sort" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => (
          props.category === item.category ? (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        ))}
      </div>

      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  );
}
