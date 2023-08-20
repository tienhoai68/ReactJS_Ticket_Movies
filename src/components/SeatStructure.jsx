import React, { Component } from "react";
import ListChair from "./ListChair";
import {connect} from "react-redux"

class SeatStructure extends Component {
  renderContent = () => {
    return this.props.listChair.map((element, index) => {
      return  <ListChair element={element} key={index}/>
    })
  }
  render() {
    return (
      <div
        className="seatStructure text-center mx-auto"
        style={{ overflowX: "auto" }}
      >
        <p id="notification" />
        <table id="seatsBlock">
          <tbody>
            {this.renderContent()}
          </tbody>
        </table>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    listChair: state.bookTickets.listChair,
  }
}

export default connect(mapStateToProps)(SeatStructure)
