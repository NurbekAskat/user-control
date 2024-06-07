
const UserForm = () => {
  return (
    <form>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
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
        <select name="role" id="role" className="form-control">
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="administrator">Editor</option>
        </select>
      </div>
    </form>
  );
};

export default UserForm;