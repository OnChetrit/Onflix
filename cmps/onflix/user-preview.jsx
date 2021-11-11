export function UserPreview(props) {
  const { user, setUser } = props;
  return (
    <div
      key={user.id}
      onClick={() => setUser(user)}
      className={`user-card btn ${user.id}`}
    >
      <img src={user.img}></img>
      <h2>{user.name}</h2>
    </div>
  );
}
