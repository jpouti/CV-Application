import React, { Component } from 'react'

export default class EducationalOverview extends Component {
    constructor() {
        super()
    }
  render() {
      const { school, title, dateStart, dateEnd, edit } = this.props;
    return (
      <div className="flex gap-10 mt-10">
        <p>School Name: <br/> {school}</p>
        <p>Title: <br/> {title}</p>
        <p>Start of studies:<br/>  {dateStart}</p>
        <p>End of studies:<br/>  {dateEnd}</p>
        <button onClick={edit} type='button'>Edit</button>
      </div>
    )
  }
}