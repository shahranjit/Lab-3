import React, { useState } from 'react';
import colors from '../data/data';

export default function ColorBox({ color }) {
  const [currentColor, setCurrentColor] = useState(color);

  const changeColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setCurrentColor(colors[randomIndex]);
  };

  return (
    <div
      onClick={changeColor}
      style={{
        backgroundColor: currentColor,
        width: '50px',
        height: '50px',
        margin: '0px',
        padding: '0px',
      }}
    >
    </div>
  );
}
