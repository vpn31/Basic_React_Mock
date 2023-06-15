import React,{useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/sidebar.css';
import {useSelector} from 'react-redux';

const User= () => {
    const user=useSelector(state=> state.user.user);

    const [sidebar,setSidebar]=useState(false);

    return (
        <div>
            <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
            <Sidebar sidebar={sidebar}/>
            <div id="userDetails">
                <h2>User Details</h2>
                {
                    user && (
                        <div>
                            <p>
                                Name:{user.name}
                            </p>
                            <p>
                                Email:{user.email}
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default User;