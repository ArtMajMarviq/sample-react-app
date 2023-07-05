import './App.css';
import { useEffect, useState } from 'react';
import UsersList from './UsersList';
import {getUsers} from '../src/api/users'

function App() {
  const [usersList, setUsersList] = useState([]);
  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    getUsers().then(res => setUsersList(res))
  }, [])

  useEffect(() => {
    console.log(newUserName);
  }, [newUserName])

  const setNameToNewUser = (event) => {
    setNewUserName(event.target.value)
  }

  const createNewUser = async () => {
    await fetch('http://localhost:3004/users', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({id: 5, name: newUserName})}).then(() => {
      getUsers().then(usersList => setUsersList(usersList));
    });
  }

  return (
    <div className="App">
      <header className="App-header">
      <UsersList usersList={usersList} />
      <div>
        <input type='text' value={newUserName} onChange={setNameToNewUser}></input>
        <button onClick={createNewUser}>Add user</button>
      </div>
      </header>
    </div>
  );
}

export default App;
