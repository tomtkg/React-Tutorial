import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a
          style={{ color: "#61dafb" }}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
