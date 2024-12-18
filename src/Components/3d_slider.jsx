import React from 'react';
import robot1 from '../assets/Robot_1.avif'; // Adjust paths as necessary
import robot2 from '../assets/robot_2.jpg';
import robot3 from '../assets/robot_3.webp';
import robot4 from '../assets/robot_4.jpg';
import robot5 from '../assets/robot_5.jpg';
import robot6 from '../assets/robot_6.webp';
import robot7 from '../assets/robot_7.jpg';
import robot8 from '../assets/robot_8.avif';
import robot9 from '../assets/robot_9.webp';
import robot10 from '../assets/robot__10.jpg';

import backgroundImage from '../assets/background.jpg'; // Adjust the path as necessary

import './styles/slider3.css'
export default function Slider3() {
    const style = {
        top: '10%',
        left: '10%',
        // height: '10%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Cover the entire area
        backgroundPosition: 'center', // Center the image
        height: '100vh', // Full height
        width: '100%', // Full width
    };
    return (

        <div style={style}>
            <div className="banner" >
                <div className="slider" style={{ '--quantity': 10 }}>
                    <div className="item" style={{ '--position': 1 }}><img src={robot1} alt="" /></div>
                    <div className="item" style={{ '--position': 2 }}><img src={robot2} alt="" /></div>
                    <div className="item" style={{ '--position': 3 }}><img src={robot3} alt="" /></div>
                    <div className="item" style={{ '--position': 4 }}><img src={robot4} alt="" /></div>
                    <div className="item" style={{ '--position': 5 }}><img src={robot5} alt="" /></div>
                    <div className="item" style={{ '--position': 6 }}><img src={robot6} alt="" /></div>
                    <div className="item" style={{ '--position': 7 }}><img src={robot7} alt="" /></div>
                    <div className="item" style={{ '--position': 8 }}><img src={robot8} alt="" /></div>
                    <div className="item" style={{ '--position': 9 }}><img src={robot9} alt="" /></div>
                    <div className="item" style={{ '--position': 10 }}><img src={robot10} alt="" /></div>
                </div>
                <div className="content">
                    <h1 data-content="3D Slider">
                        3D Slider
                    </h1>
                    <div className="author">
                        <h2>By</h2>
                        <p><b>Vishu Bhingradiya</b></p>
                        <h3>
                            Designer and Developer
                        </h3>
                    </div>
                    <div className="model"></div>
                </div>
            </div>
        </div>

    );
}


// learnt from Git Repo @ https://github.com/frontend-joe/css-reels/tree/main/modals/part-1
