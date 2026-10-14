import "./App.css";
import MainCard from "./components/Card/main-card-component";

function App() {
  return (
    <div className="app-container">
      <nav className="navbar"></nav>

      <main className="main-content">
        <div className="left-column">
          <div className="ring-container">
            <MainCard />
          </div>
          <div className="pomodoro-container">
            <MainCard />
          </div>
        </div>
        <div className="middle-column">
          <div className="main-card-container">
            <MainCard />
          </div>
          <div className="music-container">
            <MainCard />
          </div>
        </div>
        <div className="right-column">
          <div className="summary-container">
            <MainCard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
