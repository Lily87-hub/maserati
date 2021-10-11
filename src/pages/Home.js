import React from 'react';
import Navigation from "../components/Navigation";
import Circle from "../components/circle/Circle";
// import Icons from "../components/icons/Icons";


const Home = () => {
    return (
        <div>
            <Navigation/>
          <h1>Home is here</h1>
            <Circle/>

            {/*<Icons name="color"></Icons>*/}
            {/*<Icons name="door"></Icons>*/}
            {/*<Icons name="logo"></Icons>*/}
            {/*<Icons name="open"></Icons>*/}
            {/*<Icons name="seat"></Icons>*/}
        </div>
    );
};

export default Home;