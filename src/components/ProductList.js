import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function ProductList({ products, onAddToCart }) {
  const [productList, setProductList] = useState(products);

  // 點擊星星更新商品評分
  const handleRating = (id, newRating) => {
    setProductList(prevList =>
      prevList.map(item =>
        item.id === id ? { ...item, rating: newRating } : item
      )
    );
  };

  // 加減商品數量
  const handleQuantityChange = (id, delta) => {
    setProductList(prevList =>
      prevList.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return { ...item, quantity: newQty > 1 ? newQty : 1 };
        }
        return item;
      })
    );
  };

  return (
    <div>
      <h2>商品列表</h2>
      <div style={{ 
        display: "flex", 
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        {productList.map(item => (
          <div 
            key={item.id} 
            style={{ 
              border: "1px solid #ccc", 
              padding: "10px", 
              textAlign: "center"
            }}
          >
            <img
              src={item.imgUrl}
              alt={item.name}
              style={{ width: "150px", display: "block", margin: "0 auto" }}
            />
            <h4>{item.name}</h4>
            <p>價格：NT$ {item.price}</p>

            {/* 星星評分 */}
            <div style={{ marginBottom: "10px" }}>
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <FaStar
                    key={index}
                    size={20}
                    style={{ cursor: "pointer", margin: "0 2px" }}
                    color={ratingValue <= item.rating ? "#ffb400" : "#ccc"}
                    onClick={() => handleRating(item.id, ratingValue)}
                  />
                );
              })}
            </div>

            {/* 商品數量調整 */}
            <div style={{ marginBottom: "10px" }}>
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span style={{ margin: "0 8px" }}>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>

            {/* 將最新的 item.quantity 傳遞給購物車 */}
            <button onClick={() => onAddToCart(item)}>
              加入購物車
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}