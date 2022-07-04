import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Signup from "./auth/Signup";
import CreateEmploye from "./components/CreateEmploye";
import EmployeList from "./components/EmployeList";
import Navbar from "./components/header/Navbar";
import UpdateEmploye from "./components/UpdateEmploye";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<EmployeList />} />
          <Route path="/create" element={<CreateEmploye />} />
          <Route path="/update/:id" element={<UpdateEmploye />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
