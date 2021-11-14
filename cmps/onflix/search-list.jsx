import { SearchShow } from './search-show.jsx';

export function SearchList({ shows }) {
  return (
    <div className="search-results flex">
      {shows &&
        shows.map((show) => {
          return <SearchShow key={show.id} show={show} />;
        })}
    </div>
  );
}
