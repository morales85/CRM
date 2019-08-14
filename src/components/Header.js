import React, { Component } from "react";
// import Client from './Client';

class Header extends Component {

  render() {
    return (
     <table>
      <thead>
        <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Owner</th>
        <th>Email</th>
        <th>Sold</th>
        <th>First Contact</th>
        </tr>
      </thead>
      </table>
      
    )
  }
}

export default Header;