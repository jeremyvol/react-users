import { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const App = () => {
  const [users, setUsers] = useState([]);
  const addUserHandler = (newUser) => {
    setUsers((prevState) => [...prevState, newUser]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users}></UsersList>
    </div>
  );
};

export default App;
