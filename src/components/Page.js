import { useState } from 'react';
import Button from './Button';

function Page() {
  const [count, setCount] = useState(0);
  return (
    <Button onClick={() => setCount(count + 1)}>Pressed {count} times</Button>
  );
}

export default Page;
