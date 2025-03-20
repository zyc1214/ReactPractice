import React, { useState } from 'react';

function MyMoney() {
  const [balance, setBalance] = useState(1000);

  const addMoney = (amount) => {
    setBalance(prevBalance => prevBalance + amount);
  };

  const subtractMoney = (amount) => {
    setBalance(prevBalance => prevBalance - amount);
  };

  return (
    <div className="my-money">
      <h1>我的錢包</h1>
      <p>目前餘額: {balance} 元</p>
      <h1>
        <button onClick={() => addMoney(100)}>存入 100 元</button>
        <button onClick={() => subtractMoney(100)}>提取 100 元</button>
      </h1>
    </div>
  );
}

export default MyMoney;