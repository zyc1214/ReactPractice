import React, { useState } from 'react';

function NumBer_Limit() {
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
      <h3>隱藏版</h3>
      {/* 當數字小於等於0時，減號按鈕隱藏 */}
      <button onClick={handleDecrement} hidden={count <= 0}>-</button>
      <span> {count} </span>
      {/* 當數字大於等於15時，加號按鈕隱藏 */}
      <button onClick={handleIncrement} hidden={count >= 15}>+</button>
    </div>
  );
}

export default NumBer_Limit;