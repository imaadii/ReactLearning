import { useContext, useState } from "react";
import UserContext from "./UserContext";

const UpdateCard = () => {
  const { setUser } = useContext(UserContext);

  const initialForm = {
    name: "",
    email: "",
    age: "",
    city: "",
    number: "",
  };

  const [input, setInput] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser((prev) => ({
      ...prev,
      ...input,
    }));

    setInput(initialForm);
  };

  const handleChange = (e) => {
    console.log(e.target.name.value);
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="text"
          name="age"
          value={input.age}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="text"
          name="city"
          value={input.city}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="text"
          name="number"
          value={input.number}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {/* <button onClick={}></button> */}
    </div>
  );
};

export default UpdateCard;
