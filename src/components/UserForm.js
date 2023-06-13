import React, { useState } from 'react';
import Card from '../utils/Card';
import './UserForm.css';

const UserForm = (props) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.enteredUser({
      id: Math.random().toString(36).substring(2),
      username: username,
      age: age,
    });

    setUsername('');
    setAge('');
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit} className="form-container">
          <div>
            <label htmlFor="userName">Username:</label>
            <input
              id="userName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input-field"
            ></input>
          </div>
          <div>
            <label htmlFor="userAge">Age (Years):</label>
            <input
              id="userAge"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="input-field"
            ></input>
          </div>
          <button type="submit" className="submit-button">
            Add to the List
          </button>
        </form>
      </Card>
    </>
  );
};

export default UserForm;
