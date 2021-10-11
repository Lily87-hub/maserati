import React from 'react';

const Circle = () => {
    return (
        <div className="mainCircle">
            <div className="circle">
                <a href="/colour">
                    <object data="/media/color.svg" width="45" height="45"></object>
                </a>
                <a href="/rim">
                    <object data="/media/rim.svg" width="45" height="45"></object>
                </a>
            </div>
            <div className="circle2">
                <a href="/background">
                    <object data="/media/background.svg" width="55" height="55"></object>
                </a>
                <a href="/door">
                    <object data="/media/door.svg" width="45" height="45"></object>
                </a>
                <a href="/seat">
                    <object data="/media/seat.svg" width="45" height="45"></object>
                </a>
            </div>
        </div>
    );
};

export default Circle;