import React, {useState} from 'react';
import {User} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [UserMutation, setUserMutation] = useState({
    name: '',
    email: '',
    active: '',
    role: '',
  });

  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...UserMutation,
      active: 'true'
    });
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          id="name"
          value={UserMutation.name}
          className="form-control"
          onChange={changeUser}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={UserMutation.email}
          className="form-control"
          onChange={changeUser}
        />
      </div>
      <div className="form-group">
        <label htmlFor="active">active</label>
        <input
          type="checkbox"
          name="active"
          id="active"
        />
      </div>
      <div className="form-group">
        <label htmlFor="role">role</label>
        <select
          name="role"
          id="role"
          value={UserMutation.role}
          className="form-control"
          onChange={changeUser}
        >
          <option value="user" >User</option>
          <option value="admin">Admin</option>
          <option value="Editor">Editor</option>
        </select>
      </div>
      <button type="submit">Create new user</button>
    </form>
  );
};

export default UserForm;