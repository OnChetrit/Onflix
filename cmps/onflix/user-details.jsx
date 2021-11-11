import { UserSettings } from './user-settings.jsx';
import { UserService } from '../services/user.service.js';
import { SearchList } from './search-list.jsx';
import { ShowsList } from './shows-list.jsx';

export class UserDetails extends React.Component {
  state = {
    title: null,
    shows: [],
  };

  onGetShows = (title) => {
    UserService.getShowsList(this.setShows, title);
  };

  setShows = (shows) => {
    this.setState({ shows });
  };

  render() {
    const { user, onUpdateUser, onDeleteUser, setUser } = this.props;
    const { tvShows, tvShowsAction, tvShowsTrend, tvShowsComedy } = user;
    const { title, shows } = this.state;

    return (
      <div className="user-details justify-center">
        <div className="search">
          <input
            type="search"
            name="title"
            className="search-bar"
            placeholder="search"
            onInput={(e) => {
              const searchTitle = e.target.value;
              if (searchTitle) {
                this.onGetShows(searchTitle);
                this.setState({ title: searchTitle });
              } else {
                this.setState({ title: null });
              }
            }}
          />
        </div>
        <UserSettings
          user={user}
          onUpdateUser={onUpdateUser}
          onDeleteUser={onDeleteUser}
          setUser={setUser}
        />
        {title ? (
          <SearchList shows={shows} />
        ) : (
          <div className="">
            <h1 className="block">Just in ONFLIX</h1>
            <ShowsList tvShows={tvShows} />
            <h1 className="block">Actions Movies</h1>
            <ShowsList tvShows={tvShowsAction} />
            <h1 className="block">Trends Shows</h1>
            <ShowsList tvShows={tvShowsTrend} />
            <h1 className="block">Comedy Shows</h1>
            <ShowsList tvShows={tvShowsComedy} />
          </div>
        )}
      </div>
    );
  }
}
