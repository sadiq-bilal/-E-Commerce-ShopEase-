import React from "react";
import { Link } from "react-router-dom";
import { CartButton } from "./Button";
import { useCart } from "../Context/CartContext";
import { useParams } from "react-router-dom";
import { QuantityButton } from "./Button";
function ProductCard({ product }) {
const {id} = useParams();
  const { cart } = useCart();

  const cartProduct = cart.find(
  (item) => item.id === product.id
);
  return (
    <div className="product-card">
    
     <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: 'none' }}>
      <div className="productImage">
        <img src={product.image} alt={product.name} />
      </div>
      <h3>{product.name}</h3>
      <h2> ₹{product.price}</h2>

      <div className="rating">
        <span> ⭐{product.rating}</span>
        <span>({product.reviews} reviews)</span>
      </div>
      <div className="category">{product.category}</div>
      </Link>
      <div className="qty-btn">
        {!cartProduct ? <CartButton product={product} /> : <QuantityButton product={cartProduct} />}
        </div>
       
    </div>
  );
}

export default ProductCard;
