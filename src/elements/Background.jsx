import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from './logo';
import { Button } from 'react-bootstrap';
import { TextModal } from './textModal';
import './Background.css'

export default function Background() {
    const [show, setShow] = useState(false);

    return (
        <div className='background-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <Logo />
            <h1>WELCOME</h1>
            <div>
                <Link size="lg" className="btn btn-outline-secondary btn-lg" to='/apod'>APOD</Link>
                <Link size="lg" className="btn btn-outline-secondary btn-lg" to='/epic'>EPIC</Link>
                <Button size="lg" variant="outline-secondary" onClick={() => setShow(true)}>
                    About Us
                </Button>
                <TextModal id='aboutUs' show={show} onClick={() => setShow(false)} />
            </div>
        </div>
    );
}
