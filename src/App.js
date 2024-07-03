import './App.css';
import { Routes, Route } from 'react-router-dom';
import UseStatePractice from './components/UseStatePractice';
import UseEffectPractice from './components/UseEffectPractice';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<UseStatePractice />} />
      <Route path="/UseEffect" element={<UseEffectPractice />} />
      </Routes>
    </div>
  );
}

export default App;
