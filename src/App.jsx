import React, { useState } from "react";
import Header from "./daysCode/Header";
import PracButton from "./daysCode/PracButton";
import Day07 from "./daysCode/Day07";
import Day08 from "./daysCode/Day08";
import Day09 from "./daysCode/Day09";

const profiles = [];

const App = () => {
  const [people, setPeople] = useState(profiles);

  const addPerson = (newPerson) =>
    setPeople((prevPeople) => [...prevPeople, newPerson]);

  return (
    <div className="m-5">
      <p className="text-3xl">100 Days of Learning ReactJS</p>
      <br />
      <Header people={people} addPerson={addPerson} />
      <br />
      <PracButton />
      <br />
      <Day07 />
      <br />
      <Day08 />
      <br />
      <Day09 />
    </div>
  );
};

export default App;
