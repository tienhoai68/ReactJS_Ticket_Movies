import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import SelectedCharList from './SelectedCharList'

export default class Movies extends Component {
  render() {
    return (
      <div className='row mr-0 ml-0'>
        <div className='col-8'>
          <Header />
          <div className='container'>
            <Body />
          </div>
        </div>
        <div className='col-4 mt-5 '>
          <SelectedCharList/>
        </div>
      </div>
    )
  }
}
