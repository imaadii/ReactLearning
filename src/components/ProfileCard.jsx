import { useState, useEffect } from 'react';


const ProfileCard = () => {

  const [profile, setProfile] = useState([{
    name: "John Doe",
    age: 30
  }]);

  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const updateProfile = () => {
    setProfile(prev => prev.map(p => ({ ...p, name: nameInput, age: ageInput })));
    setNameInput("");
    setAgeInput("");
  };


  const addProfile = () => {
    setProfile(prev => [...prev, { name: nameInput, age: ageInput }]);
    setNameInput("");
    setAgeInput("");
  };

  return (
    <div>
      <h1>Profile Card</h1>
      {
        profile.map((p, index) => (
          <ul key={index}>
            <li>Name: {p.name}</li>
            <li>Age: {p.age}</li>
          </ul>
        ))
      }

      <input
        type="text"
        value={nameInput}
        placeholder="Enter name"
        onChange={(e) => setNameInput(e.target.value)}
      />
      <input
        type="text"
        value={ageInput}
        placeholder="Enter age"
        onChange={(e) => setAgeInput(e.target.value)}
      />
      <br />
      <br />
      <button style={{backgroundColor: 'blue', color: 'white'}} onClick={updateProfile}>Update Profile</button>

      <button style={{backgroundColor: 'green', color: 'white', margin: '10px'}} onClick={addProfile}>Add Profile</button>
   
    </div>
      
  );
};

export default ProfileCard;