import React from 'react';


const Circle = () => {
    return (
        <nav className="menu">
           <input
               type="checkbox"
               href="#"
               className="menuOpen"
               name="menuOpen"
               id="menuOpen"
           />
            <label className="menuOpenButton" htmlFor="menuOpen">
                <span className="lines line-1"/>
                <span className="lines line-2"/>
                <span className="lines line-3"/>
            </label>
            <a href="/doors" className="menu-item blue">
                {" "}
                <i className="fa fa-car" />{" "}
            </a>
            <a href="/colours" className="menu-item green">
                {" "}
                <i className="fas fa-swatchbook" />{" "}
            </a>
            <a href="/seats" className="menu-item lightblue">
                {" "}
                <i className="fas fa-chair" />{" "}
            </a>
            <a href="/tires" className="menu-item purple">
                {" "}
                <i className="far fa-circle" />{" "}
            </a>
            <a href="/landscape" className="menu-item orange">
                {" "}
                <i className="fas fa-mountain" />{" "}
            </a>
            <a href="/landscape" className="menu-item orange">
                {" "}
                <i className="fas fa-mountain" />{" "}
            </a>
        </nav>
    );
};

export default Circle;