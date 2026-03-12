import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Art from './pages/Art';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Nav/>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/art" element={<Art />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/art/:projectId" element={<ProjectDetail />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;