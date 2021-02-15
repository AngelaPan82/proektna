import React from 'react'
import { Link } from 'react-router-dom';
import './Background.css'

const linkStyle = {
    borderStyle: "solid",
    borderWidth: '0.2em', 
    borderColor: "white",
    padding: '1em',
    margin: '1em',
    color: 'white',
    textDecoration: 'none',
    borderRadius:'5px',
    textWeight: 'bold'
}

export default function Background() {
    return (
        <div className='background-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>WELCOME</h1>
            <div>
                <Link style={linkStyle} to='/apod'>APOD</Link>
                <Link style={linkStyle} to='/epic'>EPIC</Link>
            </div>
        </div>
    );
}
