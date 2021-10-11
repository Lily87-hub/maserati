import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes} from "@fortawesome/free-solid-svg-icons";
import Icons from "../icons/Icons";

const Donut2 = () => {
    return (
        <div className="circle">
            <div className="toggle" id="toggle">
                <FontAwesomeIcon icon={faTimes} className="icon"/>
            </div>
            <div className="menu" id="menu">
                <a href="/">
                    <object data="/media/color.svg" width="20" height="30" fill="green"></object>
                </a>
                <a href="/">
                    <object data="/media/rim.svg" width="20" height="30"></object>
                </a>
                <a href="/">
                    <object data="/media/background.svg" width="20" height="30"></object>
                </a>
                <a href="/">
                    <object data="/media/seat.svg" width="20" height="30"></object>
                </a>
                <a href="/">
                    <object data="/media/door.svg" width="20" height="30"></object>
                </a>
            </div>
        </div>
    );
};

export default Donut2;