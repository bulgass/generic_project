import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/pages/auth/auth";
import HomePage from "./components/pages/homepage/homePage";
import UsersTable from "./components/pages/fetchUsers/fetchUsers";
import Materials from './components/pages/materials/materials';
import HtmlMaterials from './components/pages/materials/html/HtmlMaterials';
import HtmlTutorial from "./components/pages/tutorials/htmlTutorials/htmlTutorials";
import CssMaterials from './components/pages/materials/css/CssMaterials';
import JsMaterials from "./components/pages/materials/javascript/JavaScript";
import PythonMaterials from "./components/pages/materials/python/python";
import CppMaterials from "./components/pages/materials/cpp/cpp";
import DockerMaterials from "./components/pages/materials/docker/docker";




function App() {
  return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/users" element={<UsersTable/>} />
            
            <Route path='/materials'  element={<Materials />} />
            <Route path='/materials/html'  element={<HtmlMaterials />} />
            <Route path='/materials/css'  element={<CssMaterials />} />
            <Route path='/materials/javascript'  element={<JsMaterials />} />
            <Route path='/materials/python'  element={<PythonMaterials />} />
            <Route path='/materials/cpp'  element={<CppMaterials />} />
            <Route path='/materials/docker'  element={<DockerMaterials />} />

            <Route path='/tutorials/html/:lessonId'  element={<HtmlTutorial />} />

          </Routes>
        </div>
      </Router>
  );
};


export default App;
