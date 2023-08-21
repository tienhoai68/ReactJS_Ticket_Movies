import React, { Component } from 'react'
import { connect } from 'react-redux'
import TotalPrice from './TotalPrice';
import { datGheAction } from '../store/actions/datGheAction';

class SelectedCharList extends Component {
    renderContent = () => {
        // const chair = this.props.listChair.map((element) => {
        //     return element.danhSachGhe.map((item) => {
        //         return item;
        //     })
        // });
        const filteredItems = this.props.listChair.flatMap(item => item.danhSachGhe.filter(ghe => ghe.dangChon === true));
        // console.log(filteredItems);
        return filteredItems.map((item) => {
            // console.log(item.gia);
            // console.log(item.soGhe);

            return (
                <tr key={item.soGhe}>
                    <td>
                        {item.soGhe}
                    </td>
                    <td>
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
                <h2 className='mb-5' style={{ color: "#fff" }}>Selected CharList</h2>
                <table className="table table-bordered w-100">
                    <tbody style={{ color: "#fff" }}>
                        <tr>
                            <th>Selected chair</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        {this.renderContent()}
                        <tr>
                            <td>
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