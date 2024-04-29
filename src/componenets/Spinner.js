import React, { Component } from 'react'
import spinner from './media/2.gif'

export class Loader extends Component {
  render() {
    return (
      <div className='container text-center'>
        <img src={spinner} alt="spinner" />
      </div>
    )
  }
}

export default Loader
