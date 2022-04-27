import React, { Component } from 'react'

const EducationalOverview = (props) => {
    const { educations } = props;

    return (
        <div>
        {educations.map((education) => {
        return (
        <div key={education.id} className="flex flex-col gap-10 mt-10">
            <div className='flex gap-10'>
                <div className='flex gap-2'>{education.dateStart} / {education.ongoing
                        ? <p>Ongoing</p>
                        : <p>{education.dateEnd}</p>}</div>
                <p>{education.school}</p>
                <p>{education.title}</p>
            </div>
            <div className='flex'>
                <p className='flex-1 mr-10'>Major studies:<br/>  {education.courses}</p>
                <button onClick={() => props.delete(education.id)}>Remove</button>
            </div>
        </div>
        )
                })}
    </div>
    )
}

export default EducationalOverview;