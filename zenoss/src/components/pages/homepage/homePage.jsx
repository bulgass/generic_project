import React from 'react';
import { Link } from "react-router-dom"; 
import "./homePage.css";

const HomePage = () => {
    return (
        <div className="home">
            <h1>Hello to app</h1> 
            <Link to="/auth" className="card">
                auth
            </Link>
        </div>
    );
}

export default HomePage;