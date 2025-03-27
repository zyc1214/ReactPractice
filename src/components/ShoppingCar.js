import React, { useState } from "react";
import { products } from "../data/Pruduct";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

function ShoppingCar() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        // 更新該商品的數量 (以最新的 product.quantity 覆蓋)
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity }
            : item
        );
      }
      // 若購物車中沒有，就新增
      return [...prev, product];
    });
  };

  return (
    <div>
      <button onClick={() => setShowCart(!showCart)}>購物車清單</button>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      {showCart && <CartSummary cartItems={cart} />}
    </div>
  );
}

export default ShoppingCar;