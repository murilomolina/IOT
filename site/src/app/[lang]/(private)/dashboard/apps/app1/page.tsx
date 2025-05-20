'use client'
import React, { useState } from "react";

export default function  App1() {
  const [side, setSide] = useState<number | "">("");
  const [area, setArea] = useState<number | null>(null);

  const handleCalculate = () => {
    if (typeof side === "number" && !isNaN(side)) {
      setArea(side * side);
    } else {
      setArea(null);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-xl font-bold mb-4">Square Area Calculator</h1>
      <div className="mb-4">
        <label className="block mb-1 font-medium" htmlFor="side">
          Side length:
        </label>
        <input
          id="side"
          type="number"
          min="0"
          value={side}
          onChange={e => setSide(e.target.value === "" ? "" : Number(e.target.value))}
          className="border rounded px-2 py-1 w-full"
          placeholder="Enter side length"
        />
      </div>
      <button
        onClick={handleCalculate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calculate Area
      </button>
      {area !== null && (
        <div className="mt-4 text-green-700 font-semibold">
          Area: {area}
        </div>
      )}
    </div>
  );
};
