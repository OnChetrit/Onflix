import { UserService } from '../services/user.service.js';
import { UsersList } from '../cmps/onflix/user-list.jsx';
import { UserDetails } from '../cmps/onflix/user-details.jsx';

export class UserApp extends React.Component {
  state = {
    users: [],
    user: null,
    onAddUser: null,
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    UserService.query().then((users) => {
      this.setState({ users });
    });
  };

  onUpdateUser = (userId) => {
    const name = prompt('What is your new name ?');
    if (!name) return;
    UserService.updateUser(userId, name);
    this.loadUsers();
  };

  onAddUser = () => {
    const name = prompt('What is your name ?');
    if (!name) return;
    UserService.addUser(name);
    this.loadUsers();
  };

  onDeleteUser = (userId) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        UserService.deleteUser(userId);
        this.setUser(null);
        this.loadUsers();
      }
    });
  };

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    const { users, user } = this.state;

    return (
      <section className="direction-col">
        <img className="logo" src="assets/img/logo.png"></img>
        {user ? (
          <UserDetails
            user={user}
            onUpdateUser={this.onUpdateUser}
            onDeleteUser={this.onDeleteUser}
            setUser={this.setUser}
          />
        ) : (
          users && (
            <UsersList
              setUser={this.setUser}
              onAddUser={this.onAddUser}
              users={users}
            />
          )
        )}
      </section>
    );
  }
}
