import { useContext } from "react";
import UserContext from "./UserContext";
import UpdateCard from "./UpdateCard";

const UserCard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h3>Name: {user.name}</h3>
      <h3>Email: {user.email}</h3>
      <h3>Age: {user.age}</h3>
      <h3>City: {user.city}</h3>
      <h3>Contact: {user.number}</h3>

      <UpdateCard />
    </div>
  );
};

export default UserCard;
