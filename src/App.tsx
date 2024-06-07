import {useState} from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {User} from './types';

const App = () => {

  const [users, setUsers] = useState<User[]>([
    {id: '1', name: 'Fredrin', email: 'Fredrin@gmail.com', active: true, role: 'Admin'},
    {id: '2', name: 'Lancelot', email: 'Lancelot@gmail.com', active: false, role: 'Editor'},
    {id: '3', name: 'Roger', email: 'Roger@gmail.com', active: true, role: 'Editor'}
  ]);

  const addUser = (user: User) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <UserForm onSubmit={addUser}/>
        </div>
        <div className="col-6">
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
};

export default App;
