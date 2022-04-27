import React from 'react'

const EducationalOverview = (props) => {
    const { educations } = props;

    return (
        <div>
        {educations.map((education) => {
        return (
        <div key={education.id} className="flex justify-between mt-5 p-4 bg-sky-200 rounded">
            <div className='flex flex-col gap-8'>
                <div className='flex gap-2 text-sky-900 font-bold'>{education.dateStart} / {education.ongoing
                        ? <p>Ongoing</p>
                        : <p>{education.dateEnd}</p>}
                </div>
                <p>Majors:</p>
            </div>
            <div className='flex flex-col flex-1 gap-2 mx-8'>
                <p>{education.school}</p>
                <p className='normal'>{education.title}</p>
                <p className='normal'>{education.courses}</p>
            </div>
            <button onClick={() => props.delete(education.id)} className="mr-4 text-sky-900">Remove</button>
        </div>
        )
                })}
    </div>
    )
}

export default EducationalOverview;