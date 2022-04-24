// Educational.js

import React, { Component } from "react";
import EducationalOverview from "./EducationalOverview.js";

class Educational extends Component {
    constructor() {
        super();

        this.state = {
            school: "",
            title: "",
            courses: "",
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
    handleCourses = (e) => {
        this.setState({
            courses: e.target.value
        })
    }
  
    onSubmitGeneral = (e) => {
        e.preventDefault();
        if (this.state.school === "") {
            alert('Please enter school name before submitting!');
            return
        } else if (this.state.title === "") {
            alert('Please enter title of your degree before submitting!')
            return
        } else if (this.state.dateStart === "") {
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
            <div className="container p-5" >
                <div className="mt-10 mx-10 lg:max-w-3xl">
                    <h3 className="text-sky-800 font-bold">Educational experiene:</h3>
                    <div className={this.state.edit.toString()}>
                        <form onSubmit={this.onSubmitGeneral} className="grid grid-rows-5 grid-cols-auto gap-1 lg:gap-5 mt-10">
                        <label htmlFor="schoolInput">School name:</label>
                        <input
                            className="col-start-2"
                            onChange={this.handleSchool}
                            value={this.school}
                            type='text'
                            id="schoolInput"
                            placeholder="University of Helsinki"
                        />
                        <button type="submit" onClick={this.onSubmitGeneral} className="col-start-3 row-span-5 mt-5">Add</button>
                        <label htmlFor="titleInput">Title:</label>
                        <input
                            onChange={this.handleTitle}
                            value={this.title}
                            type='text'
                            id="titleInput"
                            placeholder="Computer Science"
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
                        <label htmlFor="ongoing" >Ongoing Studies:</label>
                        <div className="text-center"><input type="checkbox" onChange={this.handleCheck}/></div>
                        <label htmlFor="courseInput">Majors:</label>
                        <textarea
                            className="bg-sky-100 rounded p-2"
                            type="text"
                            rows="4"
                            maxLength={2000}
                            onChange={this.handleCourses}
                            value={this.courses}
                            placeholder="Please enter major courses or key projects you have accomplished while studying"
                            
                        />
                        </form>
                    </div>
                    <div className={this.state.submitInfo.toString()}><EducationalOverview school={this.state.school} title={this.state.title} dateStart={this.state.dateStart} dateEnd={this.state.dateEnd} ongoing={this.state.ongoing} courses={this.state.courses} edit={this.handleEdit}/></div>
                </div>
            </div>
        );
    }
}

export default Educational;