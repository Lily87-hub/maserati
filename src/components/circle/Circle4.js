import React from 'react';
import {Link} from "react-router-dom";

const Circle4 = () => {
    return (
        <div className="mainCircle">
            <div className="circle">
                <Link to ="/colour">
                    <object data="/media/color.svg" width="45" height="45"></object>
                </Link>
                <Link to="/rim">
                    <object data="/media/rim.svg" width="45" height="45"></object>
                </Link>
            </div>
            <div className="circle2">
                <Link to="/background">
                    <object data="/media/background.svg" width="55" height="55"></object>
                </Link>
                <Link to="/door">
                    <object data="/media/door.svg" width="45" height="45"></object>
                </Link>
                <Link to="/seat">
                    <object data="/media/seat.svg" width="45" height="45"></object>
                </Link>
            </div>
            <div className="circle4">
                <Link to="/">
                    <object data="/media/Rim1.svg" width="58" height="58"></object>
                </Link>
                <Link to="/">
                    <object data="/media/Rim2.svg" width="58" height="58"></object>
                </Link>
            </div>
            <div className="circle5">
                <Link to="/">
                    <object data="/media/bg1.svg" width="58" height="58"></object>
                </Link>
                <Link to="/">
                    <object data="/media/bg2.svg" width="58" height="58"></object>
                </Link>
                <Link to="/">
                    <object data="/media/bg3.svg" width="58" height="58"></object>
                </Link>
                <Link to="/">
                    <object data="/media/bg4.svg" width="58" height="58"></object>
                </Link>
                <Link to="/">
                    <object data="/media/bg5.svg" width="58" height="58"></object>
                </Link>
            </div>
        </div>
    );
};

export default Circle4;