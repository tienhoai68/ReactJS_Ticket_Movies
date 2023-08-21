import React, { Component } from 'react'
import { connect } from 'react-redux'

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
            <td>
                {this.renderContent()} VNĐ
            </td> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listChair: state.bookTickets.listChair,
    }
}

export default connect(mapStateToProps)(TotalPrice)
