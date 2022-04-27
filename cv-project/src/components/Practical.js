// Practical.js

import React, { Component } from "react";
import PracticalOverview from "./PracticalOverview";

class Practical extends Component {
    constructor() {
        super();

        this.state = {
            job: {
                company: "",
                position: "",
                tasks: "",
                dateStart: "",
                dateEnd: "",
                ongoing: false,
                id: 1,
            },
            submitInfo: "hidden",
            edit: "block",
            jobs: [],
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.addNew = this.addNew.bind(this);
    }

    handleCompany = (e) => {
        this.setState({
            job: {
                company: e.target.value,
                position: this.state.job.position,
                tasks: this.state.job.tasks,
                dateStart: this.state.job.dateStart,
                dateEnd: this.state.job.dateEnd,
                ongoing: this.state.job.ongoing,
                id: this.state.job.id,
            }
        })
    }
    handlePosition = (e) => {
        this.setState({
            job: {
                company: this.state.job.company,
                position: e.target.value,
                tasks: this.state.job.tasks,
                dateStart: this.state.job.dateStart,
                dateEnd: this.state.job.dateEnd,
                ongoing: this.state.job.ongoing,
                id: this.state.job.id,
            }
        })
    }
    handleStartDate = (e) => {
        this.setState({
            job: {
                company: this.state.job.company,
                position: this.state.job.position,
                tasks: this.state.job.tasks,
                dateStart: e.target.value,
                dateEnd: this.state.job.dateEnd,
                ongoing: this.state.job.ongoing,
                id: this.state.job.id,
            }
        })
    }
    handleEndDate = (e) => {
        this.setState({
            job: {
                company: this.state.job.company,
                position: this.state.job.position,
                tasks: this.state.job.tasks,
                dateStart: this.state.job.dateStart,
                dateEnd: e.target.value,
                ongoing: this.state.job.ongoing,
                id: this.state.job.id,
            }
        })
    }
    handleTasks = (e) => {
        this.setState({
            job: {
                company: this.state.job.company,
                position: this.state.job.position,
                tasks: e.target.value,
                dateStart: this.state.job.dateStart,
                dateEnd: this.state.job.dateEnd,
                ongoing: this.state.job.ongoing,
                id: this.state.job.id,
            }
        })
    }
    handleCheck(){
        this.setState(
            prevState => ({
                job: {
                    company: this.state.job.company,
                    position: this.state.job.position,
                    tasks: this.state.job.tasks,
                    dateStart: this.state.job.dateStart,
                    dateEnd: this.state.job.dateEnd,
                    ongoing: !prevState.job.ongoing,
                    id: this.state.job.id,
                }
            })
        )    
    }
  
    onSubmitGeneral = (e) => {
        e.preventDefault();
        if (this.state.job.company === "" || this.state.job.position === "") {
            alert('Please enter company name or position title');
            return 
        }   else if (this.state.job.dateStart === "") {
                alert('Please enter starting date for studies before submitting!')
                return
            } else if (this.state.job.dateEnd === "") {
                this.setState(
                    prevState => ({
                        job: {
                            company: this.state.job.company,
                            position: this.state.job.position,
                            tasks: this.state.job.tasks,
                            dateStart: this.state.job.dateStart,
                            dateEnd: this.state.job.dateEnd,
                            ongoing: !prevState.job.ongoing,
                            id: this.state.job.id,
                        }
                    })
                )
        }
        this.setState({
            jobs: this.state.jobs.concat(this.state.job),
            submitInfo: 'block',
            edit: 'hidden',
            job: {
                company: "",
                position: "",
                tasks: "",
                dateStart: "",
                dateEnd: "",
                ongoing: false,
                id: this.state.job.id + 1
            },
        })
    }
    addNew() {
        this.setState({
            submitInfo: 'hidden',
            edit: 'block',
        })
        this.render();
    }
    handleDelete(id) {
        this.setState({
            jobs: this.state.jobs.filter(job => job.id !== id)
        })
    }
    render() {
        const { jobs, job } = this.state;
        return (
            <div className="container p-5">
                <div className="card mt-10 mx-10">
                    <div className="flex justify-between p-4 bg-sky-500 rounded">
                        <h3>Practical experience:</h3>
                        <button onClick={this.addNew} type='button' className="mr-4 text-stone-100">Add Work</button>
                    </div>
                    <div className={this.state.edit.toString() + " bg-blue-200 rounded px-4 pt-1 pb-4 mt-5"}>
                        <form onSubmit={this.onSubmitGeneral} className="grid grid-rows-5 grid-cols-auto gap-1 lg:gap-5 mt-5">
                        <label htmlFor="companyInput">Company name:</label>
                        <input
                            className="col-start-2"
                            onChange={this.handleCompany}
                            value={job.company}
                            type='text'
                            id="companyInput"
                            placeholder="Google"
                        />
                        <button type="submit" onClick={this.onSubmitGeneral} className="col-start-3 row-span-5 mt-5 text-sky-800">Submit</button>
                        <label htmlFor="positionInput">Title:</label>
                        <input
                            onChange={this.handlePosition}
                            value={job.position}
                            type='text'
                            id="positionInput"
                            placeholder="Intern"
                        />
                        <label htmlFor="dateStartInput">Start of work:</label>
                        <input
                            onChange={this.handleStartDate}
                            value={job.dateStart}
                            type="date"
                            id="dateStartInput"
                        />
                        <label htmlFor="dateEndInput">End of work:</label>
                        <input
                            onChange={this.handleEndDate}
                            value={job.dateEnd}
                            type="date"
                            id="dateEndInput"
                        />
                        <label htmlFor="ongoing">Ongoing:</label>
                        <div className="text-center">
                            <input type="checkbox" checked={job.ongoing} onChange={this.handleCheck}/>
                        </div>
                        <label htmlFor="tasksInput">Main tasks:</label>
                        <textarea
                            className="bg-sky-100 rounded p-2"
                            type="text"
                            rows="5"
                            maxLength={2000}
                            onChange={this.handleTasks}
                            value={job.tasks}
                            placeholder="Please explain shortly main working tasks and responsibilities of the job"
                        />
                        </form>
                    </div>
                    <div className={this.state.submitInfo.toString()}><PracticalOverview jobs={jobs} delete={this.handleDelete}/></div>
                </div>
            </div>
        );
    }
}

export default Practical;