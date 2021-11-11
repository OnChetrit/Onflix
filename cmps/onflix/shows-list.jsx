import { Show } from './show.jsx';

export function ShowsList({ tvShows }) {
  return (
    <div className="shows-container flex justify-center align-center">
      {tvShows.map((show) => (
        <Show key={show.title} show={show} />
      ))}
    </div>
  );
}
