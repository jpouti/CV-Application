import React, { Component } from 'react'

export default class EducationalOverview extends Component {
    constructor() {
        super()
    }
  render() {
      const { school, title, dateStart, dateEnd, edit, courses } = this.props;
      const check = this.props.ongoing
        ? <p>Ongoing</p>
        : <p>{dateEnd}</p>;
    return (
      <div className="flex flex-col gap-10 mt-10">
        <div className='flex gap-10'>
            <div className='flex gap-2'>{dateStart} / {check}</div>
            <p>{school}</p>
            <p>{title}</p>
        </div>
        <div className='flex'>
            <p className='flex-1 mr-10'>Major studies:<br/>  {courses}</p>
            <button onClick={edit} type='button'>Edit</button>
        </div>
      </div>
    )
  }
}