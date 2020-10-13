import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Question from "./Question";
import Add from "./Add"
import Edit from "./Edit"
import Delete from "./Delete"
import Home from "../Home"
export default class Index extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/question" exact component={Question} />
                    <Route path="/question/add" exact component={Add} />
                    <Route path="/question/:id/edit" exact component={Edit} />
                    <Route path="/question/:id/delete" exact component={Delete} />
                </Switch>
            </BrowserRouter>
        );
    }
}

