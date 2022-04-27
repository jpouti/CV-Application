import React from 'react'
/*
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
} */

const PracticalOverview = (props) => {
    const { jobs } = props;

    return (
        <div>
        {jobs.map((job) => {
        return (
        <div key={job.id} className="flex flex-col gap-10 mt-10">
            <div className='flex gap-10'>
                <div className='flex gap-2'>{job.dateStart} / {job.ongoing
                        ? <p>Ongoing</p>
                        : <p>{job.dateEnd}</p>}</div>
                <p>{job.company}</p>
                <p>{job.position}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 mr-10'>Major tasks:<br/>  {job.tasks}</p>
                <button onClick={() => props.delete(job.id)}>Remove</button>
            </div>
        </div>
        )
                })}
    </div>
    )
}

export default PracticalOverview;