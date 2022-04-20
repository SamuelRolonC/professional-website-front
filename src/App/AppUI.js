import logo from '../logo.svg';
import './App.css';
import { AboutMe } from '../AboutMe';
import { TopBar } from '../TopBar';

function AppUI() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TopBar />
      <main>
        <AboutMe />
      </main>
      <footer>
        Pie
      </footer>
    </div>
  );
}

export { AppUI };