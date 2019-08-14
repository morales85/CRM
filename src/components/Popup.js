import React, { Component } from "react";
// import ReactTable from 'react-table'
// import 'react-table/react-table.css'

class Popup extends Component {


  render() {
    return (
     <div className='popup'>
      <span>Name: </span><input style={{ outline: 'none', border:'0'}} type="text" />
      <span>Country:  </span><input type="text"/>
      <button>Update</button>
     </div>
    )
  }
}

export default Popup;