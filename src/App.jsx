import { useState, useEffect } from 'react';
import UserContext from './components/UserContext';
import Dashboard from './components/Dashboard';

const App = () => {

  const [user] = useState({
    name: 'Aditya',
    age: 25
  });

  return (
    <UserContext.Provider value = {user}>
        <Dashboard />
    </UserContext.Provider>
  );
};

export default App;