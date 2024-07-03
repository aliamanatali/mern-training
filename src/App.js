import './App.css';
import { Routes, Route } from 'react-router-dom';
import UseStatePractice from './components/UseStatePractice';
import UseEffectPractice from './components/UseEffectPractice';
import UseRefPractice from './components/UseRefPractice';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<UseStatePractice />} />
      <Route path="/UseEffect" element={<UseEffectPractice />} />
      <Route path="/UseRef" element={<UseRefPractice />} />
      </Routes>
    </div>
  );
}

export default App;
