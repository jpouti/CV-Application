// Educational.js

import React, { Component } from "react";
import EducationalOverview from "./EducationalOverview.js";

class Educational extends Component {
    constructor() {
        super();

        this.state = {
            education: {
                school: "",
                title: "",
                courses: "",
                dateStart: "",
                dateEnd: "",
                ongoing: false,
                id: 1
            },
            submitInfo: "hidden",
            edit: "block",
            educations: [],
        };
    }

    handleSchool = (e) => {
        this.setState({
            education: {
                school: e.target.value,
                title: this.state.education.title,
                dateStart: this.state.education.dateStart,
                dateEnd: this.state.education.dateEnd,
                courses: this.state.education.courses,
                ongoing: this.state.education.ongoing,
                id: this.state.education.id,
            }
        })
    }
    handleTitle = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                title: e.target.value,
                dateStart: this.state.education.dateStart,
                dateEnd: this.state.education.dateEnd,
                courses: this.state.education.courses,
                ongoing: this.state.education.ongoing,
                id: this.state.education.id,
            }
        })
    }
    handleStartDate = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                title: this.state.education.title,
                dateStart: e.target.value,
                dateEnd: this.state.education.dateEnd,
                courses: this.state.education.courses,
                ongoing: this.state.education.ongoing,
                id: this.state.education.id,
            }
        })
    }
    handleEndDate = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                title: this.state.education.title,
                dateStart: this.state.education.dateStart,
                dateEnd: e.target.value,
                courses: this.state.education.courses,
                ongoing: this.state.education.ongoing,
                id: this.state.education.id,
            }
        })
    }
    handleCourses = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                title: this.state.education.title,
                dateStart: this.state.education.dateStart,
                dateEnd: this.state.education.dateEnd,
                courses: e.target.value,
                ongoing: this.state.education.ongoing,
                id: this.state.education.id,
            }
        })
    }
    handleCheck = () => {
        this.setState(
            prevState => ({
                education: {
                    school: this.state.education.school,
                    title: this.state.education.title,
                    dateStart: this.state.education.dateStart,
                    dateEnd: this.state.education.dateEnd,
                    courses: this.state.education.courses,
                    ongoing: !prevState.education.ongoing,
                    id: this.state.education.id,
                }
        }))
    }
  
    onSubmitGeneral = (e) => {
        e.preventDefault();
        if (this.state.education.school === "") {
            alert('Please enter school name before submitting!');
            return
        } else if (this.state.education.title === "") {
            alert('Please enter title of your degree before submitting!')
            return
        } else if (this.state.education.dateStart === "") {
            alert('Please enter starting date for studies before submitting!')
            return
        } else if (this.state.education.dateEnd === "" && this.state.education.ongoing === false) {
            alert('Please enter ending date or select ongoing studies option');
            return
        }
        this.setState({
            educations: this.state.educations.concat(this.state.education),
            submitInfo: 'flex',
            edit: 'hidden',
            education: {
                school: "",
                title: "",
                courses: "",
                dateStart: "",
                dateEnd: "",
                ongoing: false,
                id: this.state.education.id + 1
            },
        })
    }

    handleEdit = (e) => {
        e.preventDefault();
        this.setState({
            submitInfo: 'hidden',
            edit: 'block',
        })
    }
    render() {
        const { educations, education } = this.state;
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
                            value={education.school}
                            type='text'
                            id="schoolInput"
                            placeholder="University of Helsinki"
                        />
                        <button type="submit" onClick={this.onSubmitGeneral} className="col-start-3 row-span-5 mt-5">Add</button>
                        <label htmlFor="titleInput">Title:</label>
                        <input
                            onChange={this.handleTitle}
                            value={education.title}
                            type='text'
                            id="titleInput"
                            placeholder="Computer Science"
                        />
                        <label htmlFor="dateStartInput">Start of studies:</label>
                        <input
                            onChange={this.handleStartDate}
                            value={education.dateStart}
                            type="date"
                            id="dateStartInput"
                        />
                        <label htmlFor="dateEndInput">End of studies:</label>
                        <input
                            onChange={this.handleEndDate}
                            value={education.dateEnd}
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
                            value={education.courses}
                            placeholder="Please enter major courses or key projects you have accomplished while studying" 
                        />
                        </form>
                    </div>
                    <div className={this.state.submitInfo.toString()}><EducationalOverview educations={educations} edit={this.handleEdit}/></div>
                </div>
            </div>
        );
    }
}

export default Educational;