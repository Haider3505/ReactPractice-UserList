import React from 'react';

import './UsersList.css';
import UserItem from './UserItem';
import Card from '../utils/Card';

const UsersList = (props) => {
  return (
    <>
      <Card>
        <ul>
          {props.users &&
            props.users.map((u) => <UserItem user={u} key={u.id} />)}
        </ul>
      </Card>
    </>
  );
};

export default UsersList;
