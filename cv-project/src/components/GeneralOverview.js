import React, { Component } from 'react'

export default class GeneralOverview extends Component {
    constructor() {
        super()
    }
  render() {
      const { name, email, phone } = this.props;
    return (
      <div className="flex gap-10 mt-10">
        <p>Name: <br/> {name}</p>
        <p>Email: <br/> {email}</p>
        <p>Phone number:<br/>  {phone}</p>
        <button type='button'>Edit</button>
      </div>
    )
  }
}