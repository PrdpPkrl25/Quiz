import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/question/Index"
import Game from "./components/Game";

export default class Index extends Component {
    render(){
        return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/question" exact component={Question} />
                        <Route path='/game' exact component={Game} />
                    </Switch>
                </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
