import './App.css';
import { StopWatch } from './Components/StopWatch';
import { Timer } from './Components/Timer';
import { Navbar } from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="timer">
        <Routes>
          <Route path="/" element={<Timer />}></Route>
          <Route path="/stopwatch" element={<StopWatch />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
