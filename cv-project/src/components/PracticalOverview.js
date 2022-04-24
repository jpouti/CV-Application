import React, { Component } from 'react'

export default class PracticalOverview extends Component {
    constructor() {
        super()
    }
  render() {
      const { company, position, dateStart, dateEnd, tasks, edit } = this.props;
      const check = this.props.ongoing
        ? <p>Ongoing</p>
        : <p>{dateEnd}</p>;
    return (
      <div className="flex flex-col gap-10 mt-10">
        <div className='flex gap-10'>
            <div className='flex gap-2'>{dateStart} / {check}</div>
            <p>{company}</p>
            <p>{position}</p>
        </div>
        <div className='flex'>
            <p className='flex-1 mr-10'>Main tasks:<br/>  {tasks}</p>
            <button onClick={edit} type='button'>Edit</button>
        </div>
      </div>   
    )
  }
}