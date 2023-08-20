import React, { Component } from 'react'
import InformationSeat from './InformationSeat'
import SeatStructure from './SeatStructure'

export default class Body extends Component {
    render() {
        return (
            <div className='wrapper'>
                <InformationSeat/>
                <SeatStructure/>
            </div>
        )
    }
}
