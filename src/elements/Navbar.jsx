import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState (false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
         <nav className="navbar">
             <div className="navbar-container">
                 <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                APAN <i className=" fas fa-globe-americas"></i>
                 </Link>
                 <div className='menu-icon' onClick={handleClick}>
                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                 </div>
                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                     <li className='nav-item'>
                         <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                             Home
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/epic' className='nav-links' onClick={closeMobileMenu}>
                             Epic
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/apod' className='nav-links' onClick={closeMobileMenu}>
                             APOD
                         </Link>
                     </li>
                     <li className='nav-item'>
                         <Link to='/twitter' className='nav-links' onClick={closeMobileMenu}>
                             NASA Twitts
                         </Link>
                     </li>
                 </ul>
                
             </div>
         </nav>
        </>
    )
}

export default Navbar
