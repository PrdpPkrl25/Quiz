import React, { Component } from 'react';
import Header from "../Header";
import axios from 'axios';



export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question:'',
            answer:'',
        }
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.handleInputQuestionChange=this.handleInputQuestionChange.bind(this);
        this.handleInputAnswerChange=this.handleInputAnswerChange.bind(this);
    }

    handleInputQuestionChange(event){
        this.setState({
            question:event.target.value
        })
    }

    handleInputAnswerChange(event){
        this.setState({
            answer:event.target.value
        })
    }

    handleFormSubmit(event){
        event.preventDefault();
        axios.post("/api/add-question",{
            question:this.state.question,
            answer:this.state.answer,
        }).then(response=>{
                this.setState({
                    question:'',
                    answer:''
                })
            this.props.history.push('/question');
        }).catch(err=>console.log('err'));

    }
    render(){
        return (
            <div className="container">
                <Header/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Quiz</div>
                            <div className="card-body ">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="question">Question:</label>
                                        <input type="text" className="form-control" required onChange={this.handleInputQuestionChange} value={this.state.question} id="question" placeholder="Enter Question..."/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="answer">Answer:</label>
                                        <input type="text" className="form-control" required onChange={this.handleInputAnswerChange} value={this.state.answer} id="answer" placeholder="Enter Answer..."/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

