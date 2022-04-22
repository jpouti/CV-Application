import React, { Component } from 'react'

export default class PracticalOverview extends Component {
    constructor() {
        super()
    }
  render() {
      const { company, position, dateStart, dateEnd, tasks, edit } = this.props;
      const check = this.props.ongoing
        ? <p>Ongoing work</p>
        : <p>Ending date:<br/> {dateEnd}</p>;
    return (
      <div className="flex flex-col gap-10 mt-10">
        <div className='flex gap-10'>
            <p>Company Name: <br/> {company}</p>
            <p>Position: <br/> {position}</p>
            <p>Starting date:<br/>  {dateStart}</p>
            {check}
        </div>
        <div className='flex'>
            <p className='flex-1'>Main tasks:<br/>  {tasks}</p>
            <button onClick={edit} type='button'>Edit</button>
        </div>
      </div>   
    )
  }
}