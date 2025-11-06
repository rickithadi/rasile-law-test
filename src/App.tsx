import { Routes, Route } from 'react-router-dom';
import { Home, AboutMe, Chapter7, ProbateAdministration, EstatePlanning, Dissolution } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/chapter-7" element={<Chapter7 />} />
        <Route path="/probate-administration" element={<ProbateAdministration />} />
        <Route path="/estate-planning" element={<EstatePlanning />} />
        <Route path="/dissolution" element={<Dissolution />} />
      </Routes>
    </div>
  );
}

export default App;
