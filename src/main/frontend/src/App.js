import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Connect from './pages/Connect';
import GuestSession from './pages/GuestSession';
import NotFound404 from './pages/NotFound404';
import PrintQuestion from "./pages/PrintQuestion";
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
              <Route path="/signup" element={<CreateAccount/>}/>
              <Route path="/guest" element={<GuestSession/>}/>
              <Route path="/question" element={<PrintQuestion/>}/>
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