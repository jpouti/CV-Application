import React, { Component } from 'react'

export default class GeneralOverview extends Component {
    constructor(props) {
        super(props)
    }
  render() {
      const { name, email, phone, edit, cv } = this.props;
      if (cv !== true) {
        return (
          <div className="flex justice-between gap-16 xl:gap-x-44 mt-10">
            <div className='flex flex-col gap-1'>
                <p>Name:</p>
                <h3>{name}</h3>
            </div>
            <div className='flex flex-col gap-1'>
                <p>Email:</p>
                <h3>{email}</h3>
            </div>
            <div className='flex flex-col gap-1'>
                <p>Phone number: </p>
                <h3> {phone}</h3>
                </div>
            <button onClick={edit} type='button' className='text-stone-100'>Edit</button>
          </div>
        );
      } else if (cv === true) {
        return (
          <div className="flex justice-between gap-16 xl:gap-x-44 mt-10">
          <div className='flex flex-col gap-1 text-sky-800'>
              <p>Name:</p>
              <h3 className='text-sky-800'>{name}</h3>
          </div>
          <div className='flex flex-col gap-1 text-sky-800'>
              <p>Email:</p>
              <h3 className='text-sky-800'>{email}</h3>
          </div>
          <div className='flex flex-col gap-1 text-sky-800'>
              <p>Phone number: </p>
              <h3 className='text-sky-800'> {phone}</h3>
              </div>
        </div>
        );
      }
  }
}