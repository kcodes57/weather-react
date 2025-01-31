import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="Weather-app">
      <header className="App-header">
        <p>
          <Weather />
        </p>
        <footer className="App-link">
          Coded by{" "}
          <a
            href="https://github.com/kcodes57"
            target="_blank"
            rel="noreferrer"
          >
            Kirsten McIntyre
          </a>{" "}
          is open-sourced on {""}
          <a
            href="https://github.com/kcodes57/K-Weather-App"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://k-shecodes-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;
