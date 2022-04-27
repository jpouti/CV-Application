import React from 'react'

const PracticalOverview = (props) => {
    const { jobs } = props;

    return (
        <div>
        {jobs.map((job) => {
        return (
        <div key={job.id} className="flex justify-between mt-5 p-4 bg-sky-200 rounded">
            <div className='flex flex-col gap-8'>
                <div className='flex gap-2 text-sky-900 font-bold'>{job.dateStart} / {job.ongoing
                        ? <p>Ongoing</p>
                        : <p>{job.dateEnd}</p>}
                </div>
                <p>Major tasks:</p>
            </div>
            <div className='flex flex-col flex-1 gap-2 mx-8'>
                <p>{job.company}</p>
                <p className='normal'>{job.position}</p>
                <p className='normal'>{job.tasks}</p>
            </div>
            <button onClick={() => props.delete(job.id)} className='mr-4 text-sky-900'>Remove</button>
        </div>
        )
                })}
    </div>
    )
}

export default PracticalOverview;