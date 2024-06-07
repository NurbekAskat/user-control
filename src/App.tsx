import {useState} from 'react';
import UserForm from './components/UserForm/UserForm';
import Users from './components/Users/Users';
import {User} from './types';

const App = () => {

  const [users, setUsers] = useState<User[]>([
    {id: 1, name: 'Askat', email: 'Nurbeka@gmail.com', active: true, role: 'admin'},
    {id: 2, name: 'Mosr', email: 'Mosr@gmail.com', active: false, role: 'editor'}
  ]);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <UserForm />
        </div>
        <div className="col-6">
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
};

export default App;
