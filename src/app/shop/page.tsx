"use client";

import * as React from "react";
import ProductCard from "@/components/shop/ProductCard";
import AddToCartButton from "@/components/shop/AddToCartButton";
import Cart from "@/components/shop/Cart";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    price: 10,
    image: "/products/IMG_0607.PNG",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    price: 20,
    image: "/products/IMG_0608.PNG",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is product 3",
    price: 30,
    image: "/products/IMG_0614.JPG",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is product 4",
    price: 40,
    image: "/products/IMG_0619.JPG",
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is product 5",
    price: 50,
    image: "/products/IMG_0620.JPG",
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is product 6",
    price: 60,
    image: "/products/IMG_1353.JPG",
  },
];

const ShopPage = () => {
  return (
    <div>
      <h1>Shop</h1>
      <Cart />
      <div className="grid grid-cols-6 gap-4">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg overflow-hidden shadow-md">
            <ProductCard product={product} />
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
