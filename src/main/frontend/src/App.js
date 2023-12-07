import React, { Component } from 'react';

class App extends Component {
  state = {
    customers: []
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/api/customers');
    const body = await response.json();
    this.setState({customers: body._embedded.customers});
  }

  render() {
    const {customers} = this.state;
    return (
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
export default App;