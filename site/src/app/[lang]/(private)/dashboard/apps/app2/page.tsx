'use client'
import { useState } from "react";

export default function App2() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const handleSum = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (!isNaN(numA) && !isNaN(numB)) {
      setResult(numA + numB);
    } else {
      setResult(null);
    }
  };

  return (
    <div>
      <h2>Sum Calculator</h2>
      <input
        type="number"
        value={a}
        onChange={e => setA(e.target.value)}
        placeholder="First number"
      />
      <span> + </span>
      <input
        type="number"
        value={b}
        onChange={e => setB(e.target.value)}
        placeholder="Second number"
      />
      <button onClick={handleSum}>Sum</button>
      {result !== null && (
        <div>Result: {result}</div>
      )}
    </div>
  );
}