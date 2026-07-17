import { useContext } from "react";
import UserContext from "./UserContext";

const Card = () => {

    const {user, age} = useContext(UserContext)

  return (
    <div>
      <h2>
        {user}
      </h2>
      <h3>
        {age}
      </h3>
    </div>
  );
};

export default Card;