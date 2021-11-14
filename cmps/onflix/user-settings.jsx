export function UserSettings(props) {
  const { user, onUpdateUser, onDeleteUser, setUser } = props;
  const tvShows = user.tvShows;
  return (
    <div className="user-settings flex justify-end align-center">
      <div className="dropdown-menu">
        <img className="img-profile" src={user.img}></img>
        <div className="dropdown-content">
          <h5>{user.name}</h5>
          <button
            className="btn "
            onClick={() => {
              onDeleteUser(user.id);
            }}
          >
            Delete Profile
          </button>
          <button
            className="btn"
            onClick={() => {
              onUpdateUser(user.id);
            }}
          >
            Change Name
          </button>
          <button className="btn" onClick={() => setUser(null)}>
            Switch Profile
          </button>
        </div>
      </div>
    </div>
  );
}
