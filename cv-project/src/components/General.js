// General.js

import React, { Component } from "react";
import GeneralOverview from "./GeneralOverview";

class General extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            phone: "",
            submitInfo: null
        }
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
        this.setState({
            submitInfo: "submit"
        })
    }
    render() {
        return (
            <div className="container">
                <div className="card mt-10 mx-10">
                    <h3 className="mb-10">Personal Information:</h3>
                    <form onSubmit={this.onSubmitGeneral} className="grid grid-cols-4 grid-rows-2 grid-gap-10">
                    <label htmlFor="nameInput">Input name</label>
                    <input
                        onChange={this.handleName}
                        value={this.name}
                        type='text'
                        id="nameInput"
                    />
                    <label htmlFor="emailInput">Input email</label>
                    <input
                        onChange={this.handleEmail}
                        value={this.email}
                        type='email'
                        id="emailInput"
                    />
                    <label htmlFor="phoneInput">Input phone number</label>
                    <input
                        onChange={this.handlePhone}
                        value={this.phone}
                        type="number"
                        id="phoneInput"
                    />
                    <button type="submit" onClick={this.onSubmitGeneral}>Add</button>
                    </form>
                    { this.state.submitInfo  && (<GeneralOverview name={this.state.name} email={this.state.email} phone={this.state.phone} />)} 
                </div>
            </div>
        );
    }
}

export default General;