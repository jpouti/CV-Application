// Practical.js

import React, { Component } from "react";
import PracticalOverview from "./PracticalOverview";

class Practical extends Component {
    constructor() {
        super();

        this.state = {
            company: "",
            position: "",
            tasks: "",
            dateStart: "",
            dateEnd: "",
            ongoing: false,
            submitInfo: "hidden",
            edit: "block"
        }
    }

    handleCompany = (e) => {
        this.setState({
            company: e.target.value
        })
    }
    handlePosition = (e) => {
        this.setState({
            position: e.target.value
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
    handleTasks = (e) => {
        this.setState({
            tasks: e.target.value
        })
    }
    handleCheck = () => {
        this.setState(
            prevState => ({ongoing: !prevState.ongoing
        }))
    }
  
    onSubmitGeneral = (e) => {
        e.preventDefault();
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
        return (
            <div className="container">
                <div className="card mt-10 mx-10">
                    <h3>Practical experiene:</h3>
                    <div className={this.state.edit.toString()}>
                        <form onSubmit={this.onSubmitGeneral} className="grid grid-cols-4 grid-rows-2 grid-gap-10 mt-10">
                        <label htmlFor="companyInput">Company name:</label>
                        <input
                            onChange={this.handleCompany}
                            value={this.company}
                            type='text'
                            id="companyInput"
                        />
                        <label htmlFor="positionInput">Title:</label>
                        <input
                            onChange={this.handlePosition}
                            value={this.position}
                            type='text'
                            id="positionInput"
                        />
                        <label htmlFor="dateStartInput">Start of work:</label>
                        <input
                            onChange={this.handleStartDate}
                            value={this.dateStart}
                            type="date"
                            id="dateStartInput"
                        />
                        <label htmlFor="dateEndInput">End of work:</label>
                        <input
                            onChange={this.handleEndDate}
                            value={this.dateEnd}
                            type="date"
                            id="dateEndInput"
                        />
                        <label htmlFor="ongoing">Ongoing:</label>
                        <input type="checkbox" onChange={this.handleCheck} />
                        <label htmlFor="tasksInput">Main tasks:</label>
                        <textarea
                            onChange={this.handleTasks}
                            value={this.tasks}
                        />
                        <button type="submit" onClick={this.onSubmitGeneral}>Add</button>
                        </form>
                    </div>
                    <div className={this.state.submitInfo.toString()}><PracticalOverview company={this.state.company} position={this.state.position} dateStart={this.state.dateStart} dateEnd={this.state.dateEnd} ongoing={this.state.ongoing} tasks={this.state.tasks} edit={this.handleEdit}/></div>
                </div>
            </div>
        );
    }
}

export default Practical;