import React, {useState} from 'react';
import {User, UserMutation} from '../../types';

interface Props {
  onSubmit: (user: User) => void;
}

const initialState: UserMutation = {
  name: '',
  email: '',
  active: false,
  role: 'User',
};

const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [UserMutation, setUserMutation] = useState<UserMutation>(initialState);

  const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const changeBooleanValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserMutation((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...UserMutation,
    });

    setUserMutation(initialState);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new user</h4>
      <div className="form-group mb-2">
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          id="name"
          value={UserMutation.name}
          className="form-control"
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={UserMutation.email}
          className="form-control"
          onChange={changeUser}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="active">active</label>
        <input
          type="checkbox"
          name="active"
          id="active"
          checked={UserMutation.active}
          onChange={changeBooleanValue}
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="role">role</label>
        <select
          name="role"
          id="role"
          value={UserMutation.role}
          className="form-select"
          onChange={changeUser}
        >
          <option value="User" selected>User</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Create new user</button>
    </form>
  );
};

export default UserForm;