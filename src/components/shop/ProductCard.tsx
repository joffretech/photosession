import React from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <img src={product.image} alt={product.name} className="w-32 h-32 object-contain mb-2" />
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
