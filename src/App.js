import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import ProfileCard from "./components/Main";
import { About } from "./components/about/About";
import Layout from "./components/layout/Layout";
import { Experience } from "./components/expe/Experience";
import SkillsTools from "./components/skills/Skills";
import Projects from "./components/project/ListProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route element={<Layout />}>
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skill" element={<SkillsTools />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
