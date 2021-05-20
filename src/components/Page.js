import { useState } from 'react';
import Button from './Button.js';

const Page = () => {
  const [count, setCount] = useState(0);
  return (
    <Button
      onClick={() => {
        return setCount(count + 1);
      }}
    >
      Pressed {count} times
    </Button>
  );
};

export default Page;
