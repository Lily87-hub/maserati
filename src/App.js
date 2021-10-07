import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Doors from "./pages/Doors";
import Colours from "./pages/Colours";
import Tires from "./pages/Tires";
import Landscape from "./pages/Landscape";
import Seats from "./pages/Seats";
import NotFound from "./pages/NotFound";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/doors" component={Doors}/>
                    <Route path="/colours" component={Colours}/>
                    <Route path="/tires" component={Tires}/>
                    <Route path="/landscape" component={Landscape}/>
                    <Route path="/seat" component={Seats}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
