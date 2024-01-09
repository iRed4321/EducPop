import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NotFound404 from "./pages/NotFound404";
import Connect from "./pages/Connect"
import CreateAccount from "./pages/CreateAccount"
import Home from "./pages/Home"

import "./styles/App.css"

class App extends Component {
  state = {
    customers: []
  };

  async componentDidMount() {
    //const response = await fetch('http://localhost:8080/api/customers');
    //const body = await response.json();
    //this.setState({customers: body._embedded.customers});
  }

  render() {
    //const {customers} = this.state;
    return (
      <div className="app">
      <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/signin" element={<CreateAccount/>}/>
              <Route path="/login" element={<Connect/>}/>
              <Route path="*" element={<NotFound404/>}/>
            </Routes>
          </div>
      </Router>
      </div>
    );
  }
}
export default App;

/*
<div className="App">
          <header className="App-header">
            <div className="App-intro">
              <h2>Customers</h2>
              <ul>
                {customers.map(customer =>
                    <li key={customer._links.self.href}>
                      {customer.firstName} {customer.lastName}
                    </li>
                )}
              </ul>
            </div>
          </header>
        </div>

*/