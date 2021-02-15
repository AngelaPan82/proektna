import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btna--primary', 'btna--outline']

const SIZES = ['btna--medium', 'btna--large']

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButoonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to='/Home' className='btn-mobile'>
            <button
                className={`btna ${checkButtonStyle} ${checkButoonSize}`}
                onClick={onClick}
                typle={type}
            >
                {children}
            </button>
        </Link>
    )
}