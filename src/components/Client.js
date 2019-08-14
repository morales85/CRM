import React, { Component } from "react";
// import ReactTable from 'react-table'
// import 'react-table/react-table.css'
import '../style/clients.css'
var moment = require('moment');


class Client extends Component {
  
// hello = () =>{
//   console.log('hello')
// }
  render() {
      let client = this.props.client
    // console.log(client)

    return (
      <tr onClick={this.props.popup} id={client.name}>
        <td>{client.name}</td>
        <td>{client.country}</td>
        <td>{client.owner}</td>
        <td>{client.emailType}</td>
        <td>{client.sold}</td>
        <td>{moment(client.firstContact).format('L')}</td>
      </tr>
    )
  }
}

export default Client;