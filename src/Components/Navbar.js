import React from 'react';
import '../styles/nav.css';
import logo from '../logo.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Nav =({sidebar,setSidebar})=>{
    return(
        <div className='navbar'>
            <nav>
                <ul className='navlist'>
                    <li id="button">
                        <button onClick={() => setSidebar(!sidebar)}>
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    </li>
                    <li><img className="logo" src={logo} alt="logo"/></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;