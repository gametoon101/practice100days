import React, { useState } from "react";
import Header from "./daysCode/Header";
import PracButton from "./daysCode/PracButton";
import Day07 from "./daysCode/Day07";

const profiles = [{}];

const App = () => {
  const [people, setPeople] = useState(profiles);

  const addPerson = (newPerson) =>
    setPeople((prevPeople) => [...prevPeople, newPerson]);

  return (
    <div>
      <Header people={people} addPerson={addPerson} />
      <PracButton />
      <Day07 />
    </div>
  );
};

export default App;
