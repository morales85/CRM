import React, { Component } from "react";

class Actions extends Component {
  constructor(){
    super()
    this.state ={
      name: '',
      country:'',
      owner:'',
      
    }
  }

  changeHandler = e =>{
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  addClient = () =>{
    let newClient = {...this.state}
    this.props.newClient(newClient)
  }

  render() {
    return (
      <div className='actionsContainer'>
      {/* <div className="updateContainer">
        <div><span>Client: </span><input type="text" name="" id="" placeholder="Client"/></div>
        <div><span>Transfer ownership to: </span><input type="text" placeholder="owner"/></div>
        <div><span>Send email: </span><input type="text" placeholder="emailtype"/></div>
        <div>Declare sale!</div>
      </div>
      <br/> */}
      <div className="addClient">
        <div><span>First Name: </span><input type="text" name="name" value={this.state.name} onChange={this.changeHandler} /></div>
        <div><span>Country: </span><input type="text" name="country" value={this.state.country} onChange={this.changeHandler} /></div>
        <div><span>Owner: </span><input type="text" name="owner" value={this.state.owner} onChange={this.changeHandler}  /></div>
        <button onClick={this.addClient}>Add new client</button>
      </div>
      </div>
    )
  }
}

export default Actions;