import React, { Component } from 'react'

export default class InformationSeat extends Component {
  render() {
    return (
      <div className='mt-5 w-100'>
         <ul class="seat_w3ls">
                <li class="smallBox greenBox">Selected Seat</li>

                <li class="smallBox redBox">Reserved Seat</li>

                <li class="smallBox emptyBox">Empty Seat</li>
            </ul>
      </div>
    )
  }
}
