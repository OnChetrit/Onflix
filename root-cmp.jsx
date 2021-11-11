import { CountDown } from './pages/count-down.jsx';
import { ShowTimeCmp } from './pages/show-time.jsx';
import { UserApp } from './pages/user-app.jsx';
import { WiringUps } from './pages/wiring-ups.jsx';

// Simple React Component
export class App extends React.Component {
  state = {
    page: 'onflix',
    isWiringUp: false,
  };

  goPage = (page) => {
    this.setState({ page });
  };

  render() {
    const { page, isWiringUp } = this.state;
    return (
      <section className="app">
        <header className="flex justify-end">
          <nav className="flex">
            <a
              href="#"
              onClick={() => {
                this.goPage('onflix');
              }}
            >
              Onflix
            </a>
            <a
              href="#"
              onClick={() => {
                this.goPage('show-time');
              }}
            >
              Show Time
            </a>
            <a
              href="#"
              onClick={() => {
                this.goPage('count-down');
              }}
            >
              Count Down
            </a>
            <a
              href="#"
              className={isWiringUp ? 'active' : ''}
              onClick={() => {
                this.setState({ isWiringUp: !isWiringUp });
              }}
            >
              Wiring Ups
            </a>
          </nav>
        </header>
        <main>
          {page === 'onflix' && <UserApp />}
          {page === 'show-time' && <ShowTimeCmp />}
          {page === 'count-down' && (
            <CountDown targetTime={Date.now() + 1000 * 60} />
          )}
          {isWiringUp && <WiringUps />}
        </main>
      </section>
    );
  }
}
