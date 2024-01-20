// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Heading from "./components/heading";
import Footer from "./components/footer";
import Login from "./components/login";
import Admin from "./admin";
import CustomForm from "./form";

function Home() {
  return (
    <div>
      <Navbar />
      <Heading />
   
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
        <Route path="/admin" element={<Admin />} />
        <Route path="/form" element={<CustomForm />} />
       
      </Routes>
    </Router>
  );
}

export default App;
