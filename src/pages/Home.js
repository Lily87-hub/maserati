import React from 'react';
import Navigation from "../components/Navigation";
import Circle1 from "../components/circle/Circle1";
// import Icons from "../components/icons/Icons";


const Home = () => {
    return (
        <div>
            <Navigation/>
          <h1>Home is here</h1>
            <Circle1/>

            {/*<Icons name="color"></Icons>*/}
            {/*<Icons name="door"></Icons>*/}
            {/*<Icons name="logo"></Icons>*/}
            {/*<Icons name="open"></Icons>*/}
            {/*<Icons name="seat"></Icons>*/}
        </div>
    );
};

export default Home;