import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Header from "../Header";
export default class Question extends Component {
constructor(props) {
    super(props);
    this.state={
        quizzes:[]
    }
}

componentDidMount() {
axios.get("/api/quizzes").then(response=>{
    this.setState({
      quizzes:response.data
    }).catch(err=>console.log('err'));
})
}

    render(){
        return (
            <div className="container">
                <Header/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All Questions</div>
                            <Link to="/question/add" className="btn btn-primary col-md-3 m-2 btn-sm mr-2">Add</Link>
                            <div className="card-body">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">S.N</th>
                                        <th scope="col">Question</th>
                                        <th scope="col">Answer</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.quizzes!==null?this.state.quizzes.map(quiz=>(
                                            <tr key={quiz.id}>
                                                <td>1.</td>
                                                <td>{quiz.question}</td>
                                                <td>{quiz.answer}</td>
                                                <td><Link to={`/question/${quiz.id}/edit`} className="btn btn-warning btn-sm mr-2">Edit</Link>
                                                    <Link to={`/question/${quiz.id}/delete`} className="btn btn-warning btn-sm mr-2">Delete</Link>
                                                </td>
                                            </tr>
                                        )):null
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

