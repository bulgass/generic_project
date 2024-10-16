import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Auth from "./components/pages/auth/auth";
import HomePage from "./components/pages/homepage/homePage";
import UsersTable from "./components/pages/fetchUsers/fetchUsers";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/auth" element={<Auth/>} />
          <Route path="/users" element={<UsersTable/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
