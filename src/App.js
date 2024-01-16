// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Heading from "./components/heading";
import Footer from "./components/footer";
import Login from "./components/login";

function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
      {/* Your main content for the home route */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
