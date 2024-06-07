import React from 'react';
import {User} from '../../types';

interface Props {
  user: User
}

const UserItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-2">
      <h5 className="card-title">{user.name}</h5>
      <p className="card-text small">{user.email}</p>
      <p className="card-text small">{user.active}</p>
      <p className="card-text small">{user.role}</p>
    </div>
  );
};

export default UserItem;