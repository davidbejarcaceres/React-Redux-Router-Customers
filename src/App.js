import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
// import HomeContainer from "./containers/HomeContainer"
// import CustomersContainer from './containers/CustomersContainer';
// import CustomerContainer from "./containers/CustomerContainer";

function App() {
  const HomeContainerLazy = lazy(() => import("./containers/HomeContainer"));

  const CustomersContainerLazy = lazy(() =>
    import("./containers/CustomersContainer")
  );
  const CustomerContainerLazy = lazy(() =>
    import("./containers/CustomerContainer")
  );

  const NewCustomerContainerLazy = lazy(() =>
  import("./containers/NewCustomerContainer")
);

  const renderCustomerNewContainer = () => <h1>Customer new Container</h1>;

  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          component={WaitingComponent(HomeContainerLazy)}
        ></Route>
        <Route
          exact
          path="/customers"
          component={WaitingComponent(CustomersContainerLazy)}
        ></Route>
        <Switch>
          <Route
            exact
            path="/customers/new"
            component={WaitingComponent(NewCustomerContainerLazy)}
          ></Route>
          <Route
            path="/customers/:dni"
            render={props => (
              <Suspense fallback={<div>Loading...</div>}>
                <CustomerContainerLazy dni={props.match.params.dni} />
              </Suspense>
            )}
          />
          }/>
        </Switch>
      </div>
    </Router>
  );
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;
