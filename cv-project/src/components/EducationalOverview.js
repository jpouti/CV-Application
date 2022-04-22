import React, { Component } from 'react'

export default class EducationalOverview extends Component {
    constructor() {
        super()
    }
  render() {
      const { school, title, dateStart, dateEnd, edit } = this.props;
      const check = this.props.ongoing
        ? <p>Ongoing studies</p>
        : <p>Ending date:<br/> {dateEnd}</p>;
    return (
      <div className="flex gap-10 mt-10">
        <p>School Name: <br/> {school}</p>
        <p>Title: <br/> {title}</p>
        <p>Start of studies:<br/>  {dateStart}</p>
        {check}
        <button onClick={edit} type='button'>Edit</button>
      </div>
    )
  }
}