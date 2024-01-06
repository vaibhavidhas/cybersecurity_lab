
import Home from './routes/home'
import About from './routes/about'
import Contact from './routes/contact'
import Research from './routes/research'
import Vulnerabilities from './routes/vulnerabilities'
import Publications from "./routes/publications";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/vulnerabilities" element={<Vulnerabilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/publications" element={<Publications />} />

      </Routes>
    </div>
  );
}

export default App;
