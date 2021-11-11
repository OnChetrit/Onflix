export class CountDown extends React.Component {
  state = {
    targetTime: null,
    timeLeft: 0,
    isLastSec: false,
    isStart: false,
  };
  componentDidMount() {
    this.setState({ targetTime: this.props.targetTime });
    this.setTimer();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setTimer = () => {
    this.interval = setInterval(() => {
      this.setState({ isStart: true });
      let { targetTime } = this.props;
      let { timeLeft, isLastSec } = this.state;

      targetTime -= Date.now();

      let minutes = parseInt((targetTime / 60000) % 60);
      let seconds = parseInt((targetTime / 1000) % 60);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      if (minutes === '00' && seconds === '05') isLastSec = true;
      if (minutes === '00' && seconds === '00') clearInterval(this.interval);

      timeLeft = minutes + ':' + seconds;
      this.setState({ timeLeft, isLastSec });
    }, 1000);
  };

  render() {
    var { isLastSec, isStart, timeLeft } = this.state;

    return (
      <div className="count-container">
        <h1>CountDown</h1>
        <h1 className={isLastSec ? 'last-sec' : ''}>
          <span>{isStart && timeLeft}</span>
        </h1>
      </div>
    );
  }
}
