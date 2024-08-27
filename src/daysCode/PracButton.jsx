import React, { useState } from "react";

const PracButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2 className="text-2xl">DAY 6 - Event Handling</h2>
      <p className="text-lg">the count is: {count}</p>
      <div className="grid grid-cols-2 gap-2 w-24">
        <button
          className="bg-blue-500 p-1 border-2 w-12 h-10"
          onClick={() => setCount((e) => e + 1)}
        >
          + 1
        </button>
        <button
          className="bg-green-500 p-1 border-2 w-12 h-10"
          onClick={() => setCount((e) => e - 1)}
        >
          -1
        </button>
        <button
          className="bg-red-500 p-1 border-2 w-12 h-10"
          onClick={() => setCount((e) => e + 10)}
        >
          + 10
        </button>
        <button
          className="bg-yellow-500 p-1 border-2 w-12 h-10"
          onClick={() => setCount((e) => e - 5)}
        >
          - 5
        </button>
      </div>
    </div>
  );
};

export default PracButton;
