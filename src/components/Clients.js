import React, { Component } from "react";
import Client from './Client';
import Popup from './Popup';
import '../style/clients.css';

class Clients extends Component {
  constructor(){
    super()
    this.state ={
      page:0,
      showPopup: false,

    }
  }
  showPopup = () => {
    this.setState({ showPopup: true })
  }
  hidePopup = () =>{
    if(this.state.showPopup === true ){
      this.setState({showPopup: false})
    }
  }

nextPage = () => {
  this.setState({
    page: this.state.page +1
  })
}

previousPage = () =>{
  if (!this.state.page){return}
  this.setState({
    page: this.state.page -1
  })
}

searchName = (event) => {
  this.props.searchName(event)
}
searchCountry = (event) => {
  this.props.searchCountry(event)
}

  render() {
      let clients = this.props.clients
      let input = this.props.input.toLowerCase()
      // console.log(clients)
    // console.log(clients)
        let popUp = this.state.showPopup ? <Popup /> : null

    return (
      <div onClick={this.hidePopup}>
        <input name="input" type="text" placeholder="Search" value={this.props.input} onChange={this.searchName} />
        <select name="inputs">
          <option value={this.props.input} onChange={this.searchName}>Name</option>
          <option value={this.props.input} onChange={this.searchCountry}>Country</option>
        </select>
        <table>
        <thead>
        <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Owner</th>
        <th>Email Type</th>
        <th>Sold</th>
        <th>First Contact</th>
        </tr>
        {clients.length >0 ? clients.filter(c => c.name.toLowerCase().includes(input)).slice((this.state.page * 16), (this.state.page * 16) + 16).map(c => <Client key={c.name} popup={this.showPopup} client={c} name={c.name} owner={c.owner} firstContact={c.firstContact} sold={c.sold} emailType={c.emailType} email={c.email} country={c.country} />) : null}

        {/* {clients.length >0 ? clients.slice((this.state.page * 16), (this.state.page * 16) + 16).filter(c => c.name.toLowerCase().includes(input)).map(c => <Client key={c.name} popup={this.showPopup} client={c} name={c.name} owner={c.owner} firstContact={c.firstContact} sold={c.sold} emailType={c.emailType} email={c.email} country={c.country} />) : null} */}
        {/* {clients.length > 0 ? clients.slice((this.state.page * 16), (this.state.page * 16) + 16).map(c => <Client key={c.name} popup={this.showPopup} client={c} name={c.name} owner={c.owner} firstContact={c.firstContact} sold={c.sold} emailType={c.emailType} email={c.email} country={c.country} />):null} */}
        </thead>
        </table>
        <div className="paging">
          <span className="paging1" onClick={this.previousPage}>Previous page </span>
          <span className='numPages'>{this.state.page * 16} - {this.state.page * 16 + 16}</span> 
          <span className="paging2" onClick={this.nextPage}>Next page</span>
        </div>
        {popUp}
        </div>
    )
  }
}

export default Clients;