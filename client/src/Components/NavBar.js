import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function NavBar() {
    return ( 
        <nav className='navigationBar'>
            <div className='logo'>
                <img src='https://zmqrcode.com/nav/nav-zm.png' alt='logo'/>
            </div>
            <div className='links'>
               <Link to='/signup'><button>Signup</button></Link> 
               <Link to='/login'><button>login</button></Link>
            </div>
        </nav>
     );
}

export default NavBar;