import React,{useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/sidebar.css';
import UserModal from './UserModal';

const Introduction =()=>{
    const [users, setUsers] = useState([]);

    const handleNext = (name, email) => {
        const user = { name, email };
        setUsers([...users, user]);
    };
    const [sidebar,setSidebar]=useState(false);
    return(
        <div className='introduction'>
            <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
            <Sidebar sidebar={sidebar}/>
            <div id="body">
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
            <UserModal onNext={handleNext} />
            </div>
        </div>
    )
}

export default Introduction;