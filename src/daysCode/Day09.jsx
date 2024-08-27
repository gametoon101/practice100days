import React, { useState } from "react";

const profileArrObj = [];

const Day09 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [profiles, setProfiles] = useState(profileArrObj);

  const addPerson = (newPerson) => {
    setProfiles((prevProfiles) => [...prevProfiles, newPerson]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      name: name,
      email: email,
      birthday: birthDate,
      gender: gender,
      phone: mobile,
    };

    addPerson(newProfile);
    setName("");
    setEmail("");
    setBirthDate("");
    setGender("");
    setMobile("");
  };

  console.log(profiles);

  return (
    <div>
      <p className="text-2xl">Day 9 - Forms</p>
      <div className="container bg-gray-300 w-96 max-h-max rounded-md m-5">
        <div>
          <form
            className="p-4 flex flex-col justify-center items-start"
            onSubmit={handleOnSubmit}
          >
            <label>Name</label>
            <input
              className="border-2 rounded w-full focus:ring-2 ring-slate-800"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              className="border-2 rounded w-full focus:ring-2 ring-slate-800"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Birth Date</label>
            <input
              className="border-2 rounded focus:ring-2 ring-slate-800"
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="Male">Male</option>
              <option value="Male">Female</option>
            </select>
            <label>Phone Number</label>
            <input
              className="border-2 rounded w-full focus:ring-2 ring-slate-800"
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button
              className="mx-auto mt-4 p-2 bg-gradient-to-l from-cyan-300 to-teal-300 rounded-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Day09;
