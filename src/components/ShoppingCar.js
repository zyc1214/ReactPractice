import React, { useState } from "react";
import { products } from "../data/Pruduct";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

function ShoppingCar() {
  const [cart, setCart] = useState([]);

  // 加入購物車
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  // 在購物車內加減數量
  const handleCartQuantityChange = (id, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty > 1 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  // 新增：移除購物車內的商品
  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>我的購物頁面</h1>
      <ProductList products={products} onAddToCart={handleAddToCart} />
      {/* 傳入 onRemoveItem 用於購物車內刪除商品 */}
      <CartSummary
        cartItems={cart}
        onCartQuantityChange={handleCartQuantityChange}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}

export default ShoppingCar;