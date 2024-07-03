import './App.css';
import { Routes, Route } from 'react-router-dom';
import UseStatePractice from './components/UseStatePractice';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UseStatePractice />} />
      </Routes>
    </div>
  );
}

export default App;
