import React, { Component } from 'react'
import { connect } from 'react-redux'
import TotalPrice from './TotalPrice';
import { datGheAction } from '../store/actions/datGheAction';

class SelectedCharList extends Component {
    renderContent = () => {
        const filteredItems = this.props.listChair.flatMap(item => item.danhSachGhe.filter(chair => chair.dangChon === true));
        return filteredItems.map((item) => {
            return (
                <tr key={item.soGhe}>
                    <td style={{color : 'orange', fontWeight: 800}}>
                        {item.soGhe}
                    </td>
                    <td style={{color : 'orange', fontWeight: 800}}>
                        {item.gia.toLocaleString()} VNĐ
                    </td>
                    <td>
                        <button onClick={() => this.props.dispatch(datGheAction(item))} className='btn btn-danger'><i className="fa-solid fa-xmark"></i></button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        
        return (
            <div className="displayerBoxes text-center mt-5 mx-auto container" style={{ overflowX: 'auto' }}>
                <h2 className='mb-5 title_td'>Selected CharList</h2>
                <table className="table table-bordered w-100">
                    <tbody>
                        <tr>
                            <th className='title_td'>Selected chair</th>
                            <th className='title_td'>Price</th>
                            <th className='title_td'>Action</th>
                        </tr>
                        {this.renderContent()}
                        <tr>
                            <td className='title_td'>
                                Total
                            </td>
                            <TotalPrice />
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        listChair: state.bookTickets.listChair,
    }
}

export default connect(mapStateToProps)(SelectedCharList)