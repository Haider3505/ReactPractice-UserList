import React from 'react';

import './UserItem.css';

const UserItem = (props) => {
  return (
    <>
      <li>
        {props.user.username} ({props.user.age})
      </li>
    </>
  );
};

export default UserItem;
