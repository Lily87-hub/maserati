import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes} from "@fortawesome/free-solid-svg-icons";

const Donut2 = () => {
    return (
        <div className="circle">
            <div className="toggle" id="toggle">
                <FontAwesomeIcon icon={faTimes} className="icon"/>
            </div>
            <div className="menu" id="menu">
                <a href="/">
                    <i className="fa fa-car" aria-hidden="true"></i>
                </a>
                <a href="/">
                    <i className="fas fa-swatchbook" aria-hidden="true"></i>
                </a>
                <a href="/">
                    <i className="fas fa-chair" aria-hidden="true"></i>
                </a>
                <a href="/">
                    <i className="far fa-circle" aria-hidden="true"></i>
                </a>
                <a href="/">
                    <i className="fas fa-mountain" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
};

export default Donut2;