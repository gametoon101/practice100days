import React from "react";

const movies = [
  "interstellar",
  "Lord of the Rings",
  "Limitless",
  "Catch Me if You Can",
  "Jumper",
];
const Day08 = () => {
  return (
    <div>
      <p className="text-2xl">DAY 8 - Lists and Keys</p>
      <p className="text-xl">Favorite Movies!</p>
      <p>(picture later if needed)</p>
      <ul className="list-disc pl-5">
        {movies.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    </div>
  );
};

export default Day08;
