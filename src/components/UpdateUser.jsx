import { useContext, useState } from "react";
import UserContext from "./UserContext";

const UpdateUser = () => {
  const { setUser, setAge } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const handleName = () => {
    input.trim() && setUser(input.trim());
    setInput("");
  };

  const handleAge = () => {
    setAge(ageInput);
    setAgeInput(0);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleName}>Update User</button>

      <br />
      <br />

      <input
        type="text"
        value={ageInput}
        onChange={(e) => setAgeInput(e.target.value)}
      />
      <button onClick={handleAge}>Update Age</button>
    </div>
  );
};

export default UpdateUser;
