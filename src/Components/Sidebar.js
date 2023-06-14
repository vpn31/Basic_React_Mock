import React from 'react';
import '../styles/sidebar.css';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

const Sidebar =({sidebar})=>{
    return(
        
        <div className={`sidebar ${sidebar ?"active":""}`}>
            <ul className="App-header">
                <div id='list'>
                    <li id="item">
                        <Link to="/">Home</Link>
                    </li>
                    <li id="item">
                        <Link to="/team">Team</Link>
                    </li>
                    <li id="item">
                        <Link to="/about">About Us</Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Sidebar;