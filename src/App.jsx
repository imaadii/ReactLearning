<<<<<<< HEAD
import IconComponent from "./components/IconComponent";
import ProfileCard from "./components/ProfileCard";
import StyleCard from "./components/StyleCard";

const App = () => {
  return (
    <>
      <IconComponent />
      <br />
      <br />
      <StyleCard />
      <br />
      <ProfileCard />
    </>
  );
};
=======
import React from 'react'


const data = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Smith'
  },
  {
    id: 3,
    name: 'Mike Johnson'
  }
]


const App = () => {
  return (
    <div>
      <h1>User List</h1>
>>>>>>> 79b5188d24c181cf4b9f730a47cdd640fed3c482

      <ul>
        {
          data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App