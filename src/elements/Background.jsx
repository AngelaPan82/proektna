import React from 'react'
import '../App.css'
import { Button } from './Button';
import './Background.css'
export default function Background() {
    return (
        <div className='background-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>WELCOME</h1>
            <div className="background-btns">
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large' to='/apod'>APOD</Button>

            </div>
        </div>
    );
}
