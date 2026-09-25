import React from 'react'
import { useCart } from '../Context/CartContext';
import { QuantityButton } from './Button';

function CartItem({product}) {
  const {removeFromCart} = useCart();

  const total = product.quantity * product.price;
  return (
    <div className='cart-items'>
      <div className="item-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="item-details">
        <h3>{product.name}</h3>
        <h2>${product.price}</h2>
      </div>

      <QuantityButton product={product}/>
      <div className='cart-item-total'>
        ${total.toFixed(2)}
      </div>
      <button
        className='delete-btn'
        onClick = {() => removeFromCart(product.id)}
      >🗑️</button>
      
    </div>
  )
}

export default CartItem
