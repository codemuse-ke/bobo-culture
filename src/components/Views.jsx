import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products, Cart } from "./components";

const Views = ({ products, cart, handleAddToCart }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Products products={products} onAddToCart={handleAddToCart} />}
      />
      <Route path="/cart" element={<Cart cart={cart} />} />
    </Routes>
  );
};

export default Views;
