import React, { Component } from 'react'

export default class From extends Component {
    render() {
        return (
            <div className="inputForm w-100">
                <h2 className='input-title'>fill the required details below and select your seats</h2>
                <div className="d-flex justify-content-between w-100">
                    <div className="agileits-left d-flex align-items-center">
                        <label className='mr-2'> Name
                            <span>*</span>
                        </label>
                        <input className='form-control input-form' type="text" id="Username" required />
                    </div>
                    <div className="agileits-right d-flex align-items-center">
                        <label className='mr-1 '> Number of Seats
                            <span>*</span>
                        </label>
                        <input className='form-control input-form' type="number" id="Numseats" required min={1} />
                    </div>
                </div>
                <button className='btn btn-success mt-4'>Start Selecting</button>
            </div>

        )
    }
}
