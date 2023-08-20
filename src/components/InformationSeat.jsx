import React, { Component } from "react";

export default class InformationSeat extends Component {
  render() {
    return (
      <div className="w-100">
      <div className="screen">
      <h2 className="wthree">Screen this way</h2>
    </div>
      <div classname="mt-5">
        <ul className="seat_w3ls">
          <li className="smallBox greenBox">Selected Seat</li>
          <li className="smallBox redBox">Reserved Seat</li>
          <li className="smallBox emptyBox">Empty Seat</li>
        </ul>
      </div>
      </div>
    );
  }
}
