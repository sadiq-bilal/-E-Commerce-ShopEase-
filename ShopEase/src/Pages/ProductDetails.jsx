import React from 'react'
import { useParams } from 'react-router-dom';
import { QuantityButton } from '../Components/Button';
import { CartButton } from '../Components/Button';
import products from '../Data/Product';
import { useCart } from '../Context/CartContext';

function ProductDetails() {
  const  {id} = useParams();
  const {cart} = useCart();
  
  const product = products.find(
    (product) => product.id === Number(id)
  );

const cartProduct = cart.find(
  (product) => product.id === Number(id)
);



  return (
    <div className='product-details-page'>
      <div className="product-details">
        <div className="product-img">
          <img src={product.image} alt="product.name" />
        </div>
        <div className="product-details-info">
          <h1>{product.name}</h1>
          <h2>₹{product.price}</h2>
          <div className="product-rating">
            <span>⭐{product.rating}</span>
            <span>({product.reviews} reviews)</span>
          </div>
          <p className='description'>
            {product.description}
          </p>
          <p style={{fontWeight:'bold'}}>Category :<span>{product.category}</span></p>
          {!cartProduct?<CartButton product={product}/>:<QuantityButton product={cartProduct}/>}
          
        </div>
       

        

      </div>
    </div>
  )
}

export default ProductDetails
