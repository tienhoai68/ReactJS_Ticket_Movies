import React, { Component } from "react";

export default class ListChair extends Component {
  render() {
    const chair = this.props.element.danhSachGhe;
      // console.log(chair[this.props.index].soGhe);
      console.log(this.props.element);
    return (
        <tr>
          <td>{this.props.element.hang}</td>
          {
            this.props.element.danhSachGhe.map((item)=>{
              return  <td><button>{item.soGhe}</button></td>
            })
          }
         
          {/* <td><button>{chair[0].soGhe}</button></td>
          <td><button>{chair[1].soGhe}</button></td>
          <td><button>{chair[2].soGhe}</button></td>
          <td><button>{chair[3].soGhe}</button></td>
          <td><button>{chair[4].soGhe}</button></td>
          <td><button>{chair[5].soGhe}</button></td>
          <td><button>{chair[6].soGhe}</button></td>
          <td><button>{chair[7].soGhe}</button></td>
          <td><button>{chair[8].soGhe}</button></td>
          <td><button>{chair[9].soGhe}</button></td>
          <td><button>{chair[10].soGhe}</button></td>
          <td><button>{chair[11].soGhe}</button></td> */}
        </tr>
    );
  }
}
