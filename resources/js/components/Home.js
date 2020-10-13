import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from "./Header";

export default class Home extends Component {
    render(){
        return (
            <div className="container">
                <Header/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Quiz</div>
                            <div className="card-body ">
                                <h6>Welcome to Quiz Game</h6>
                                To Start Quiz Game, Click Here:&nbsp;
                                <Link to='/game' className='btn btn-primary'>Start Game</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

