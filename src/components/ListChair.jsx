import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../store/actions/datGheAction";

class ListChair extends Component {
  renderContent = () => {
    return this.props.element.danhSachGhe.map((item) => {
      const { soGhe, daDat, dangChon } = item;
      // return <td key={index}><button>{item.soGhe}</button></td>
      if (this.props.element.hang !== "") {
        return (
          <td key={item.soGhe}>
            <button onClick={() => this.props.dispatch(datGheAction(item))} disabled={daDat} className={`btn chair ${dangChon && 'button-success'}`} >{soGhe}</button>
          </td>
        );
      } else {
        return (
          <td style={{ color: 'orange', fontWeight: 800 }} key={item.soGhe}>{soGhe}</td>
        );
      }
    });
  };
  render() {
    return (
      <tr>
        <td style={{ color: 'orange', fontWeight: 800 }}>{this.props.element.hang}</td>
        {
          this.renderContent()
        }
      </tr>
    );
  };
};



export default connect()(ListChair)
