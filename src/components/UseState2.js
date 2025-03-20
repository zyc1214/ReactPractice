import React, { useState } from "react";

export default function UseState2() {
    // 新增用戶代號狀態
    const [userId, setUserId] = useState("");
    
    // 初始化購物車商品列表狀態
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "超值筆電", price: 15000, quantity: 1 },
        { id: 2, name: "智能手機", price: 8500, quantity: 1 },
        { id: 3, name: "無線耳機", price: 1200, quantity: 1 }
    ]);

    // 處理用戶代號輸入變更
    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    // 增加商品數量
    const increaseQuantity = (itemId) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // 減少商品數量
    const decreaseQuantity = (itemId) => {
        setCartItems(prevItems => 
            prevItems.map(item => 
                item.id === itemId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    // 計算總金額
    const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="shopping-cart">
            <h2>我的購物車</h2>
            
            {/* 用戶代號輸入欄位 */}
            <div className="user-info" style={{
                marginBottom: '20px',
                padding: '15px',
                backgroundColor: '#f0f4f8',
                borderRadius: '5px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
                <div style={{ 
                    fontWeight: 'bold', 
                    marginBottom: '8px'
                }}>
                    請輸入用戶代號:
                </div>
                <input
                    type="text"
                    value={userId}
                    onChange={handleUserIdChange}
                    placeholder="例: A12345"
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        fontSize: '16px'
                    }}
                />
                {userId && (
                    <div style={{ 
                        marginTop: '8px', 
                        color: '#4285f4' 
                    }}>
                        您好，用戶 <strong>{userId}</strong>
                    </div>
                )}
            </div>
            
            {cartItems.map(item => (
                <div key={item.id} className="cart-item" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px',
                    margin: '10px 0',
                    backgroundColor: '#f9f9f9',
                    borderRadius: '5px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}>
                    <div className="item-info" style={{ flex: '1' }}>
                        <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{item.name}</div>
                        <div style={{ color: '#666' }}>單價: NT$ {item.price}</div>
                    </div>
                    
                    <div className="quantity-control" style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px'
                    }}>
                        <button 
                            onClick={() => decreaseQuantity(item.id)}
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: item.quantity > 0 ? '#ff5252' : '#ccc',
                                color: 'white',
                                fontSize: '18px',
                                cursor: 'pointer'
                            }}
                            disabled={item.quantity <= 0}
                        >-</button>
                        
                        <span style={{ 
                            fontSize: '18px', 
                            minWidth: '30px', 
                            textAlign: 'center' 
                        }}>
                            {item.quantity}
                        </span>
                        
                        <button 
                            onClick={() => increaseQuantity(item.id)}
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                border: 'none',
                                backgroundColor: '#4caf50',
                                color: 'white',
                                fontSize: '18px',
                                cursor: 'pointer'
                            }}
                        >+</button>
                    </div>
                    
                    <div className="item-total" style={{ 
                        marginLeft: '20px',
                        fontWeight: 'bold',
                        minWidth: '100px',
                        textAlign: 'right'
                    }}>
                        NT$ {item.price * item.quantity}
                    </div>
                </div>
            ))}

            <div className="cart-summary" style={{
                marginTop: '20px',
                padding: '15px',
                backgroundColor: '#e0f7fa',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div>
                    {userId && <span>用戶: <strong>{userId}</strong></span>}
                </div>
                <div style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold'
                }}>
                    總金額: NT$ {totalAmount}
                </div>
            </div>
        </div>
    );
}