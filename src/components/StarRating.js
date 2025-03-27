import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function StarRating() {
  // 當前評分和懸停評分的狀態
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      <div className="star-rating">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          
          return (
            <label key={index}>
              {/* 隱藏的 radio 輔助功能，可選擇性保留 */}
              <input 
                type="radio" 
                name="rating" 
                value={ratingValue} 
                onClick={() => setRating(ratingValue)} 
                style={{ display: 'none' }}
              />
              <FaStar
                size={30}
                color={ratingValue <= (hover || rating) ? "black" : "gray"}
                style={{ cursor: 'pointer' }}
                onClick={() => setRating(ratingValue)}
              />
            </label>
          );
        })}
      </div>
      <p>您的滿意程度: {rating} 顆星</p>
    </div>
  );
}

export default StarRating;