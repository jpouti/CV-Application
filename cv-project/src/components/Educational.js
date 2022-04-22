// Educational.js

import React, { Component } from "react";
import EducationalOverview from "./EducationalOverview.js";

class Educational extends Component {
    constructor() {
        super();

        this.state = {
            school: "",
            title: "",
            dateStart: "",
            dateEnd: "",
            ongoing: false,
            submitInfo: "hidden",
            edit: "block"
        }
    }

    handleSchool = (e) => {
        this.setState({
            school: e.target.value
        })
    }
    handleTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    handleStartDate = (e) => {
        this.setState({
            dateStart: e.target.value
        })
    }
    handleEndDate = (e) => {
        this.setState({
            dateEnd: e.target.value
        })
    } 
  
    onSubmitGeneral = (e) => {
        e.preventDefault();
        this.setState({
            submitInfo: 'flex',
            edit: 'hidden'
        })
    }
    handleCheck = () => {
        this.setState(
            prevState => ({ongoing: !prevState.ongoing
        }))
    }
    handleEdit = (e) => {
        e.preventDefault();
        this.setState({
            submitInfo: 'hidden',
            edit: 'block'
        })
    }
    render() {
        return (
            <div className="container">
                <div className="card mt-10 mx-10">
                    <h3>Educational experiene:</h3>
                    <div className={this.state.edit.toString()}>
                        <form onSubmit={this.onSubmitGeneral} className="grid grid-cols-4 grid-rows-2 grid-gap-10 mt-10">
                        <label htmlFor="schoolInput">School name:</label>
                        <input
                            onChange={this.handleSchool}
                            value={this.school}
                            type='text'
                            id="schoolInput"
                        />
                        <label htmlFor="titleInput">Title:</label>
                        <input
                            onChange={this.handleTitle}
                            value={this.title}
                            type='text'
                            id="titleInput"
                        />
                        <label htmlFor="dateStartInput">Start of studies:</label>
                        <input
                            onChange={this.handleStartDate}
                            value={this.dateStart}
                            type="date"
                            id="dateStartInput"
                        />
                        <label htmlFor="dateEndInput">End of studies:</label>
                        <input
                            onChange={this.handleEndDate}
                            value={this.dateEnd}
                            type="date"
                            id="dateEndInput"
                        />
                        <label htmlFor="ongoing">Ongoing Studies:</label>
                        <input type="checkbox" onChange={this.handleCheck} />
                        <button type="submit" onClick={this.onSubmitGeneral}>Add</button>
                        </form>
                    </div>
                    <div className={this.state.submitInfo.toString()}><EducationalOverview school={this.state.school} title={this.state.title} dateStart={this.state.dateStart} dateEnd={this.state.dateEnd} ongoing={this.state.ongoing} edit={this.handleEdit}/></div>
                </div>
            </div>
        );
    }
}

export default Educational;