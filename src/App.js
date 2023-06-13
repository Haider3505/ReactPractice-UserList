// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <div>
        <UserForm enteredUser={(user) => setUsers([...users, user])} />
      </div>
      {users.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <UsersList users={users} />
        </div>
      )}
    </div>
  );
}

export default App;
