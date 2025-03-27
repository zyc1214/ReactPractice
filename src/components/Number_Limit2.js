import React, { useState } from 'react';

function Number_Limit2() {
  // 初始值設為0
  const [count, setCount] = useState(0);
  
  // 增加數字
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  // 減少數字
  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div>
      <h3>禁用版</h3>
      <button onClick={handleDecrement} disabled={count <= 0}>-</button>
      <span> {count} </span>
      <button onClick={handleIncrement} disabled={count >= 15}>+</button>
    </div>
  );
}

export default Number_Limit2;