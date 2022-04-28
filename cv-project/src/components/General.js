// General.js

import React, { Component } from "react";
import GeneralOverview from "./GeneralOverview";
import validator from 'validator';

class General extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            phone: "",
            submitInfo: "hidden",
            edit: "block"
        }
        this.onSubmitGeneral = this.onSubmitGeneral.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
     
    handleName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handlePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    } 
    
    onSubmitGeneral = (e) => {
        e.preventDefault();
        if ( this.state.name === "") {
            alert('Please enter your name before submitting');
            return
        } else if (!(validator.isEmail(this.state.email))) {
            alert('Please enter a valid Email!')
            return
        } else if (this.state.phone === "") {
            alert('Please enter your phone number before submitting!')
            return
        }
        this.setState({
            submitInfo: 'flex',
            edit: 'hidden'
        })
    }
    handleEdit = (e) => {
        e.preventDefault();
        this.setState({
            submitInfo: 'hidden',
            edit: 'block'
        })
    }
    render() {
        if (this.props.cv === true) {
            return (
                <div className="flex justify-center"><GeneralOverview name={this.state.name} email={this.state.email} phone={this.state.phone} cv={this.props.cv}/></div>
            )
        } else {
            return (
                <div className="container mt-10 p-5 lg:flex lg:justify-center bg-sky-500">
                    <div className="mx-10">
                        <h3>Personal Information:</h3>
                        <div className={this.state.edit.toString()}>
                            <form onSubmit={this.onSubmitGeneral} className="grid grid-rows-3 lg:grid-rows-2 grid-cols-auto gap-1 lg:gap-5 mt-10 lg:max-w-3xl ">
                            <label htmlFor="nameInput" >Name: </label>
                            <input className="lg:row-start-2 lg:col-start-1"
                                onChange={this.handleName}
                                value={this.name}
                                type='text'
                                id="nameInput"
                                placeholder="John Doe"
                                required
                            />
                            <label htmlFor="emailInput"className="row-start-2 col-start-1 lg:col-start-2 lg:row-start-1">Email:</label>
                            <input className="row-start-2 col-start-2 lg:row-start-2 lg:col-start-2"
                                onChange={this.handleEmail}
                                value={this.email}
                                type='email'
                                id="emailInput"
                                placeholder="john.doe@example.com"
                                required
                            />
                            <label htmlFor="phoneInput"className="row-start-3 col-start-1 lg:row-start-1 lg:col-start-3">Phone number:</label>
                            <input className="row-start-3 col-start-2 lg:row-start-2 lg:col-start-3"
                                required
                                onChange={this.handlePhone}
                                value={this.phone}
                                type="number"
                                id="phoneInput"
                                placeholder="+358 501213123"
                            />
                            <button type="submit" onClick={this.onSubmitGeneral} className="col-start-3 row-span-3 lg:col-start-4 lg:row-span-2 text-stone-100">Add</button>
                            </form>
                        </div>
                        <div className={this.state.submitInfo.toString() + " justify-center"}><GeneralOverview name={this.state.name} email={this.state.email} phone={this.state.phone} edit={this.handleEdit}/></div>
                    </div>
                </div>
            );
        }
    }
}

export default General;