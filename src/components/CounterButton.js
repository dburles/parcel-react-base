import React, { useState } from 'react';

function CounterButton() {
  const [count, set_count] = useState(0);
  return (
    <button onClick={() => set_count(count + 1)}>Pressed {count} times</button>
  );
}

export default CounterButton;
