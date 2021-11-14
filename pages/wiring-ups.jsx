export class WiringUps extends React.Component {
  state = {
    x: 0,
    y: 0,
  };
  componentDidMount() {
    this.showMoves();
  }

  showMoves = () => {
    document.addEventListener('mousemove', (ev) => {
      this.setState({ x: ev.clientX, y: ev.clientY });
    });
  };

  render() {
    const { x, y } = this.state;
    return (
      <div className="mouse-pos">
        <h1>
          {x} , {y}px
        </h1>
      </div>
    );
  }
}
