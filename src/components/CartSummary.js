import React from "react";

export default function CartSummary({ cartItems }) {
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
            <li key={item.id}>
              {item.name} x {item.quantity} = NT$ {item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
      <p>總金額：NT$ {totalAmount}</p>
    </div>
  );
}