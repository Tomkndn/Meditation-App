import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MyProvider } from "./components/context/ContextProvider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MeditationDetails from "./components/MeditationDetails";

function App() {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Router>
        <Header />
        <MyProvider>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/:type" element={<MeditationDetails />} />
          </Routes>
        </MyProvider>
        <Footer />
    </Router>
  );
}

export default App;
