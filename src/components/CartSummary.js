import React from "react";

export default function CartSummary({ cartItems, onCartQuantityChange, onRemoveItem }) {
  // 計算總金額
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ border: "1px solid #000", marginTop: "20px", padding: "10px" }}>
      <h3>購物車清單</h3>
      {cartItems.length === 0 ? (
        <p>目前沒有任何商品</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <strong>{item.name}</strong>
              <div>
                {/* 加減數量 */}
                <button onClick={() => onCartQuantityChange(item.id, -1)}>-</button>
                <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                <button onClick={() => onCartQuantityChange(item.id, 1)}>+</button>
                {/* 新增：刪除商品的按鈕 */}
                <button style={{ marginLeft: "8px" }} onClick={() => onRemoveItem(item.id)}>
                  移除
                </button>
              </div>
              <p>小計：NT$ {item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <p>總金額：NT$ {totalAmount}</p>
    </div>
  );
}