import React, { useState } from "react";

const Hitsuraan = () => <p>Confident ka nga tao!</p>;
const Humble = () => <p>Ana ba dapat humble!</p>;

const Day07 = () => {
  const [gwapo, setGwapo] = useState(false);
  const [hidden, setHidden] = useState(false);

  const handleOnClick1 = () => {
    setHidden(true);
    setGwapo(true);
  };

  const handleOnClick2 = () => {
    setHidden(true);
    setGwapo(false);
  };

  return (
    <div>
      <h2 className="text-2xl">DAY 7 - Rendering Components Conditionally</h2>
      <div className="space-x-3">
        <p className="text-xl">ARE YOU BUEATIFUL?</p>
        <button
          className="w-12 p-2 bg-gradient-to-l from-cyan-300 to-teal-300 rounded-lg"
          onClick={handleOnClick1}
        >
          YES
        </button>
        <button
          className="w-12 p-2 bg-gradient-to-l from-cyan-300 to-teal-300 rounded-lg"
          onClick={handleOnClick2}
        >
          NO
        </button>
        {hidden && (gwapo ? <Hitsuraan /> : <Humble />)}
      </div>
    </div>
  );
};

export default Day07;
