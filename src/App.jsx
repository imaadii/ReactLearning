import { useState } from "react";
import Dashboard from "./components/Dashboard";
import UserContext from "./components/UserContext";

const App = () => {
  const [user, setUser] = useState({
    name: "Aditya",
    email: "aditya@example.com",
    age: 25,
    city: "Bhind",
    number: 9191919191,
  });

  return (
    <UserContext.Provider value = {{user, setUser}}>
      <Dashboard />
    </UserContext.Provider>
  );
};

export default App;
