import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Clients from './components/Clients';
import Analytics from './components/Analytics';
import Actions from './components/Actions';
// import Header from './components/Header';
// import Popup from './components/Popup';
import axios from 'axios'

class App extends Component {
  constructor(){
    super()
    this.state = {
      clients:[],
      input:''
    }
  }

// componentDidMount =  () =>{
//    setTimeout(function () {
//     let data =  require('./data.json')
//     console.log(data[0])
//     //populate state with data
//   }, 100,
//   this.setState({
//     clients: this.data
//   })
//   )}

  // componentDidMount = async ()=>{
  //   let data = await require('./data.json')
  //   console.log(data)
  //   this.setState({
  //    clients: data
  //   })
  // }
  
  componentDidMount = async ()=>{
    let data = await axios.get("http://localhost:5000/clients", function(){})
    this.setState({
      clients: data.data
    })
  }

  newClient = async client => {
    let data = await axios.post("http://localhost:5000/client", client, function(){})
    this.setState({
      clients: data.data
    })
  }

  searchName = (event) => {
    let searchValue = event.target.value
    let inputName = event.target.name
    this.setState({ [inputName]: searchValue })
  }
  searchCountry = (event) => {
    let searchValue = event.target.value
    let inputCountry = event.target.country
    this.setState({ [inputCountry]: searchValue })
  }
  
  render (){
    return (
      <Router>
        <div className="menu">
          <span className="clients"><Link style={{ textDecoration: 'none' }} to="/clients">Clients</Link> </span>
          <span className="actions"><Link style={{ textDecoration: 'none' }} to="/actions">Actions</Link> </span>
          <span className="analytics"><Link style={{ textDecoration: 'none' }} to="/analytics">Analytics</Link> </span>
        </div>
        <Route exact path="/clients" render={() =>  <Clients clients={this.state.clients} input={this.state.input} searchName={this.searchName}  />} />
        <Route exact path="/actions" render={() => <Actions newClient={this.newClient} clients={this.state.clients} />} />
        <Route exact path="/analytics" render={() => <Analytics />} />
      </Router>
    )
  }
}

export default App;
