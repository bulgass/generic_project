import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from "./components/pages/auth/auth";
import HomePage from "./components/pages/homepage/homePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/auth" element={<Auth/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
