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
        if (this.state.company === "" || this.state.position === "") {
            alert('Please enter company name or position title');
            return 
        }   else if (this.state.dateStart === "") {
                alert('Please enter starting date for studies before submitting!')
                return
            } else if (this.state.dateEnd === "") {
                this.setState({
                    ongoing: true
                })
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
        return (
            <div className="container p-5">
                <div className="card mt-10 mx-10">
                    <h3 className="text-sky-800 font-bold">Practical experiene:</h3>
                    <div className={this.state.edit.toString()}>
                        <form onSubmit={this.onSubmitGeneral} className="grid grid-rows-5 grid-cols-auto gap-1 lg:gap-5 mt-10">
                        <label htmlFor="companyInput">Company name:</label>
                        <input
                            className="col-start-2"
                            onChange={this.handleCompany}
                            value={this.company}
                            type='text'
                            id="companyInput"
                            placeholder="Google"
                        />
                        <button type="submit" onClick={this.onSubmitGeneral} className="col-start-3 row-span-5 mt-5">Add</button>
                        <label htmlFor="positionInput">Title:</label>
                        <input
                            onChange={this.handlePosition}
                            value={this.position}
                            type='text'
                            id="positionInput"
                            placeholder="Intern"
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
                        <div className="text-center"><input type="checkbox" onChange={this.handleCheck}/></div>
                        <label htmlFor="tasksInput">Main tasks:</label>
                        <textarea
                            className="bg-sky-100 rounded p-2"
                            type="text"
                            rows="5"
                            maxLength={2000}
                            onChange={this.handleTasks}
                            value={this.tasks}
                            placeholder="Please explain shortly main working tasks and responsibilities of the job"
                        />
                        </form>
                    </div>
                    <div className={this.state.submitInfo.toString()}><PracticalOverview company={this.state.company} position={this.state.position} dateStart={this.state.dateStart} dateEnd={this.state.dateEnd} ongoing={this.state.ongoing} tasks={this.state.tasks} edit={this.handleEdit}/></div>
                </div>
            </div>
        );
    }
}

export default Practical;