import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import RegistrationForm from "./components/RegistrationForm";
import SearchChallan from "./components/SearchChallan";
import Navbar from "./components/Navbar";
import UpdateChalla from "./components/UpdateChalla";
import All from "./components/All";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/search" element={<SearchChallan />} />
        <Route path="/update" element={<UpdateChalla />} />
        <Route path="/details" element={<All />} />

      </Routes>
  

    </Router>
  );
}

export default App;
