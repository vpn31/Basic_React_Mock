import React,{useState} from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../styles/sidebar.css';

const About =()=>{
    const [sidebar,setSidebar]=useState(false);
    return(
        <div className='aboutus'>
            <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
            <Sidebar sidebar={sidebar}/>
            <div className='about'>
            <h2 id="headAbout">About Us</h2>
                <p>
                    Arthmate Finance is a financial technology company that provides innovative solutions to help businesses manage their finances. We offer a wide range of services, including accounting, bookkeeping, payroll, and tax preparation. We are committed to providing our clients with the highest quality service and support.
                </p>
                <p>
                    Arthmate Finance was founded in 2010 by two experienced financial professionals. We have a team of experienced and qualified accountants, bookkeepers, and tax preparers who are dedicated to providing our clients with the best possible service.
                </p>
                <p>
                    We are a growing company with a strong focus on customer service. We are committed to providing our clients with the highest quality service and support. If you have any questions or need assistance, please do not hesitate to contact us.
                </p>
                <a href="/about">Contact Us</a>
            </div>
        </div>
    )
}

export default About;