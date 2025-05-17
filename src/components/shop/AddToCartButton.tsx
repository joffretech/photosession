import React from "react";
import { useCart } from "../../../../src/context/cart-context";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const AddToCartButton: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product.id);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCartButton;
