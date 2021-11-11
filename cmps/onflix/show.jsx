export function Show(props) {
  const { show } = props;

  return (
    <div key={show.title} className="show flex direction-col">
      <div className="">
        <img src={show.img}></img>
        <div className="shadow"></div>
      </div>
      {/* <h4>{show.title}</h4> */}
    </div>
  );
}
