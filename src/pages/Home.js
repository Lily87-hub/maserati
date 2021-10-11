import React from 'react';
import Navigation from "../components/Navigation";
/*import Circle from "../components/circle/Circle";*/
import Donut from "../components/circle/Donut";
import Donut2 from "../components/circle/Donut2";
import Icons from "../components/icons/Icons";


const Home = () => {
    return (
        <div>
            <Navigation/>
            {/*<Circle/>*/}
          <h1>Home is here</h1>
            <Donut/>
            <Donut2/>

            <Icons name="color"></Icons>
            <Icons name="door"></Icons>
            <Icons name="logo"></Icons>
            <Icons name="open"></Icons>
            <Icons name="seat"></Icons>
        </div>
    );
};

export default Home;