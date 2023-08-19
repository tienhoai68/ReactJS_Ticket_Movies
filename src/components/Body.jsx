import React, { Component } from 'react'
import From from './From'
import InformationSeat from './InformationSeat'
import SeatStructure from './SeatStructure'

export default class Body extends Component {
    render() {
        return (
            <div className='wrapper'>
                <From/>
                <InformationSeat/>
                <SeatStructure/>
            </div>
        )
    }
}
