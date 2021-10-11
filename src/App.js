import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Door from "./pages/Door";
import Colour from "./pages/Colour";
import Rim from "./pages/Rim";
import Background from "./pages/Background";
import Seat from "./pages/Seat";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/door" component={Door}/>
                    <Route path="/colour" component={Colour}/>
                    <Route path="/rim" component={Rim}/>
                    <Route path="/background" component={Background}/>
                    <Route path="/seat" component={Seat}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
