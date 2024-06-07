import React from 'react';
import {User} from '../../types';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({user}) => {
  let activeStatus = 'not Active';

  if (user.active) {
    activeStatus = 'Active';
  }

  return (
    <div className="card mb-2 p-3">
      <h5 className="card-title">User name: {user.name}</h5>
      <p className="card-text small">User email: {user.email}</p>
      <p className="card-text small">User status: {activeStatus}</p>
      <p className="card-text small">User role: {user.role}</p>
    </div>
  );
};

export default UserItem;