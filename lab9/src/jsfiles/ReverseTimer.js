// ReverseTimer.js
import React, { useState, useEffect } from 'react';

function ReverseTimer() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count - 1);
      if (count === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }, [count]);

  return (
    <div>
      <p>Countdown: {count}</p>
    </div>
  );
}

export default ReverseTimer;