import React, { Component } from 'react'
import { connect } from 'react-redux'
import { payment } from '../store/actions/datGheAction';

class TotalPrice extends Component {

    renderContent = () => {
        const totalPrice = this.props.listChair.flatMap(item => item.danhSachGhe)
            .filter(chair => chair.dangChon === true)
            .reduce((total, chair) => total + chair.gia, 0);
            // console.log(totalPrice);
            return totalPrice.toLocaleString();
    }
    render() {
        return (
            <>
            <td style={{color : 'orange', fontWeight: 800}}>
                {this.renderContent()} VNĐ
            </td> 
            <td><button onClick={() => this.props.dispatch(payment())} className="btn btn-success">Payment</button></td>         
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listChair: state.bookTickets.listChair,
        buyTicket: state.bookTickets.buyTickets,
    }
}

export default connect(mapStateToProps)(TotalPrice)
