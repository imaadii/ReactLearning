import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = "https://jsonplaceholder.typicode.com/users";

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const fetchUsers = async function () {
      try {
        const response = await fetch(URL);

        const data = await response.json();

        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.log(console.log(error));
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>This is for Testing purpose</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <br />

            {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
