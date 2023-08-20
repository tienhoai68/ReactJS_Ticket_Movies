import React, { Component } from "react";
import { connect } from "react-redux";

 class ListChair extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.element.hang}</td>
          {
            this.props.element.danhSachGhe.map((item, index)=>{
              // console.log(item.dangChon);
              const {soGhe, daDat, dangChon} = item;
              // return <td key={index}><button>{item.soGhe}</button></td>
              return <td key={index}><button onClick={() => this.props.dispatch(
                {
                  type: "DAT_GHE",
                  payload: item,
                }
              )} disabled={daDat} className={`btn chair ${dangChon && 'button-success'}`} >{soGhe}</button></td>
            })
          }
        </tr>
    );
  }
}



export default connect()(ListChair)
