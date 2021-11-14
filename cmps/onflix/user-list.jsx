import { UserPreview } from './user-preview.jsx';

export function UsersList(props) {
  const { users, setUser, onAddUser } = props;

  return (
    <section className="users flex">
      <h1>Who's watching?</h1>
      {users.map((user) => {
        return <UserPreview key={user.id} user={user} setUser={setUser} />;
      })}
      <div
        className="user-card btn add-user"
        onClick={() => {
          onAddUser();
        }}
      >
        <div className="add-user-container flex justify-center align-center">
          <img src="assets/img/add-user.png"></img>
        </div>
        <h2>Add Profile</h2>
      </div>
    </section>
  );
}
