import './App.css';
import React, { useParams} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Login from "./Login"
import Dashboard from "./dashboard"
import Addexpense from "./Addexpense";
import Editexpense from "./Editexpense";
import Store from "./Store"



function App() {

  
  return (
    <Router>
         
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Addexpense" element={<Addexpense />} />
        <Route path={`/editexpense/:id`} element={<Editexpense />} />
        {/* <Route path="/Store" element={<Store/>} /> */}

      </Routes>
      
    </Router>
  );
}

export default App;

