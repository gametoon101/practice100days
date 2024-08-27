/* eslint-disable react/prop-types */
import React, { useState } from "react";

const Header = ({ people, addPerson }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const maxId =
      people.length > 0 ? Math.max(...people.map((person) => person.id)) : 0;

    const newPerson = { id: maxId + 1, fname: firstName, lname: lastName };
    addPerson(newPerson);
    setFirstName("");
    setLastName("");
  };

  console.log(people);

  return (
    <div>
      <p className="text-2xl">DAY 1 - 5(exagerated.. hehe)</p>
      <form className="flex gap-3" onSubmit={handleOnSubmit}>
        <input
          className="p-0.5 border-2 border-black  rounded-md"
          type="text"
          placeholder="Type your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          className="p-0.5 border-2 border-black  rounded-md"
          type="text"
          placeholder="Type your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <button
          className="p-2 bg-gradient-to-l from-cyan-300 to-teal-300 rounded-lg"
          type="submit"
        >
          Add Person
        </button>
      </form>
      <div>
        {people.map((listItems) => (
          <p key={listItems.id}>
            {listItems.fname} {listItems.lname}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Header;
