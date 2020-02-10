import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomeContainer from "./containers/HomeContainer"
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

function App() {

  const renderHome = () => <h1>Home</h1>;

  const renderCustomerContainer = () => <h1>Customer Container</h1>;

  const renderCustomerListContainer = () => <h1>Customers List Container</h1>;

  const renderCustomerNewContainer = () => <h1>Customer new Container</h1>

  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={HomeContainer}></Route>
        <Route exact path="/customers" component={CustomersContainer}></Route>
        <Switch>
          <Route exact path="/customers/new" component={renderCustomerNewContainer}></Route>
          <Route exact path="/customers/:dni" render={props => <CustomerContainer dni={props.match.params.dni} />} />
        </Switch>
      </div>
    </Router >

  );
}

export default App;
