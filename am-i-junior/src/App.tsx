import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage/Homepage'
import Quizpage from './components/Quizpage'
import './reset.css'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/quiz" element={<Quizpage />}/>
    </Routes>
    </>
  );
}

export default App
