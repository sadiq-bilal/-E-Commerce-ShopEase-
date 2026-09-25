import React from 'react'
import { useCart } from '../Context/CartContext'
import { Link } from 'react-router-dom';

export  function CartButton({product}) {
  
const { addToCart } = useCart();
  return (
    <div style={{
      display: "flex",
      gap:"10px",
    }}>
      
     
      <button
      className='cart-btn'
      onClick={() => addToCart(product)}
      >Add to Cart</button>
    </div>
  )
}
export function QuantityButton ({product}) {
  const { increaseQuantity,decreaseQuantity} = useCart();

return (
  <div className="quantity">
    <button
      onClick={() => decreaseQuantity(product.id)}
    >-</button>
    <span>{product.quantity}</span>
    <button
      onClick={() => increaseQuantity(product.id)}
    >+</button>
  </div>
)

}
