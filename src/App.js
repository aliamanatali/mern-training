import './App.css';
import { Routes, Route } from 'react-router-dom';
import UseStatePractice from './components/UseStatePractice';
import UseEffectPractice from './components/UseEffectPractice';
import UseRefPractice from './components/UseRefPractice';
import UseMemoPractice from './components/UseMemoPractice';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<UseStatePractice />} />
      <Route path="/UseEffect" element={<UseEffectPractice />} />
      <Route path="/UseRef" element={<UseRefPractice />} />
      <Route path="/UseMemoPractice" element={<UseMemoPractice />} />
      </Routes>

    </div>
  );
}

export default App;
