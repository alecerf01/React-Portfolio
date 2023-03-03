import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/index";
import HomePage from "./components/HomePage/index";
import Contact from "./components/Contact/index";
import ProjectsPage from "./components/ProjectsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects-page" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
