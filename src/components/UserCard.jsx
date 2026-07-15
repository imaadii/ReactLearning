import { useContext } from "react";
import UserContext from "./UserContext";

const UserCard = () => {

    const user = useContext(UserContext)

  return (
    <div>
      <h2>
        {user.name}
      </h2>
      <h3>
        {user.age}
      </h3>
    </div>
  );
};

export default UserCard;