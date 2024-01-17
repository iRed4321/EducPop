import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NotFound404 from "./pages/NotFound404";
import Connect from "./pages/Connect"
import CreateAccount from "./pages/CreateAccount"
import HostSession from "./pages/HostSession"
import Home from "./pages/Home"

import "./styles/App.scss"
import GuestSession from './pages/GuestSession';
import PrintQuestion from "./pages/PrintQuestion";
import SessionList from "./pages/SessionList";
import DragNDropQuestions from "./components/DragNDropQuestions";

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
              <Route path="/signup" element={<CreateAccount/>}/>
              <Route path="/login" element={<Connect/>}/>
              <Route path="/guest" element={<GuestSession/>}/>
              <Route path="/question" element={<PrintQuestion/>}/>
              <Route path="/host_session" element={<HostSession/>}/>
              <Route path="/sessions" element={<SessionList/>}/>
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
    );
  }
}
export default App; */
