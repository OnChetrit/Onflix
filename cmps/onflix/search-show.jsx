export function SearchShow({ show }) {
  return (
    <div className="show flex">
      <div className="flex direction-col">
        <h4>{show.name}</h4>
        <img src={show.picture}></img>
        {/* <div className="shadow"></div> */}
      </div>
    </div>
  );
}
