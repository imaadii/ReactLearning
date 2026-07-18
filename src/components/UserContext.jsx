import { createContext } from "react";

const UserContext = createContext({
    name: 'Aditya',
    email: 'aditya@example.com',
    age: 25,
    city: 'Bhind',
    number: 9191919191
});

export default UserContext;