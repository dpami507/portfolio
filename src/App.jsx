import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Art from './pages/Art';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/art" element={<Art />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/art/:projectId" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;