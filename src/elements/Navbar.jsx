import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar () {
    const [click, setClick] = useState (false);
    const [, setButton] = useState (true);

    const handleClick = () => setClick (!click);
    const closeMobileMenu = () => setClick (false);

    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton (false)
        } 
        else 
        {
            setButton(true);
        }
    }

window.addEventListener ('resize', showButton);
return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    APAN  <i className="fab fa-typo3"></i>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}/>
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
            </div>
        </nav>
    </>
)
}
export default Navbar