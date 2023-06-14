import React,{useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/sidebar.css'

const Team =()=>{
    const [sidebar,setSidebar]=useState(false);
    return(
        <div className='introduction'>
            <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
            <Sidebar sidebar={sidebar}/>
            <div id="head">
            <h2 id="headAbout">Introduction</h2>
                <p>
                    Arthmate offers a complete suite of Cloud based financial services enabling on demand deployment of credit and lending technology for Fintechs, Digital Platforms and SME Anchors.
                </p>
                <h3>
                    Services
                </h3>
                <p>
                <ul id="intro-list">
                    <li>Credit Exchange</li>
                    <li>Credit Cloud</li>
                    <li>Risk Engine</li>
                </ul>
                </p>
            </div>
        </div>
    )
}

export default Team;