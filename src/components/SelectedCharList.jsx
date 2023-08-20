import React, { Component } from 'react'

export default class SelectedCharList extends Component {
    render() {
        return (
            <div className="displayerBoxes text-center mt-5 mx-auto container" style={{ overflowX: 'auto' }}>
                <h2 className='mb-5' style={{color: "#fff"}}>Selected CharList</h2>
                <table className="table table-bordered w-100">
                    <tbody style={{color: "#fff"}}>
                        <tr>
                            <th>Number of Seats</th>
                            <th>Sprice</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>
                                A1
                            </td>
                            <td>
                                150.000
                            </td>
                            <td>
                                <button className='btn btn-danger'>Cancel</button>
                            </td>
                            
                        </tr>
                        <tr>
                            <td>
                                Total
                            </td>
                            <td>
                                150.000
                            </td>  
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        )
    }
}
