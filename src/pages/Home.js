import React from 'react';
import Navigation from "../components/Navigation";
/*import Circle from "../components/circle/Circle";*/
import Donut from "../components/circle/Donut";
import Donut2 from "../components/circle/Donut2";


const Home = () => {
    return (
        <div>
            <Navigation/>
            {/*<Circle/>*/}
          <h1>Home is here</h1>
            <Donut/>
            <Donut2/>
        </div>
    );
};

export default Home;