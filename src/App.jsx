import { useState } from "react";
import Card from "./components/Card";
import UserContext from "./components/UserContext";
import UpdateUser from "./components/UpdateUser";

const App = () => {

  const [user, setUser] = useState("Guest");
  const [age, setAge] = useState(0);


  return (
      <UserContext.Provider value={{user, age, setAge, setUser}}>
        <Card />
        <UpdateUser />
      </UserContext.Provider>
  );
};

export default App;