import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import CustomerData from '../components/CustomerData';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from "../reducers/index"
import { Route, withRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history'

afterEach(cleanup);

const customer = {
    "id": "30000001",
    "dni": "30000001",
    "name": "FACUNDO 2",
    "age": 30
};
const history = createMemoryHistory()

const handleSubmit = async (values) => {
    console.log(JSON.stringify(values));
    // return await props.updateCustomer(values)
}

const handleOnBack = () => {
    history.goBack()
}

const handleSubmitSuccess = () => {
    history.goBack()
}

const handleOnDelete = async (customerID) => {
    console.log("Handle on delete user:" + customerID);     
    // await props.deleteCustomer(customerID)
    // props.history.goBack()
}
const isDelete = true;


// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState for the entire store that the ui is rendered with
let initialStateStore = {}
function renderWithRedux(
    ui,
    { initialState, store = createStore(reducers, initialStateStore ) } = {}
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      // adding `store` to the returned utilities to allow us
      // to reference it in our tests (just try to avoid using
      // this to test implementation details).
      store,
    }
  }


  test('can render with redux with defaults', () => {
    const { getByText } = renderWithRedux(
        <CustomerData
            id={customer.id}
            name={customer.dni}
            dni={customer.name}
            age={customer.age}
            onSubmit={handleSubmit}
            onSubmitSuccess={handleSubmitSuccess}
            onBack={handleOnBack}
            isDeleteAllowed={!!isDelete}
            onDelete={handleOnDelete}/>
    )
    const customerName = getByText(/FACUNDO 2/i);
    expect(customerName).toBeInTheDocument();
  });


  it("renders Snapshot", () => {
    const { asFragment } = renderWithRedux(
        <CustomerData
            id={customer.id}
            name={customer.dni}
            dni={customer.name}
            age={customer.age}
            onSubmit={handleSubmit}
            onSubmitSuccess={handleSubmitSuccess}
            onBack={handleOnBack}
            isDeleteAllowed={!!isDelete}
            onDelete={handleOnDelete}/>
    );
    expect(asFragment()).toMatchSnapshot();
  });



  
  it("Shows Text from props", () => {
    const { getByText } = renderWithRedux(
        <CustomerData
            id={customer.id}
            name={customer.dni}
            dni={customer.name}
            age={customer.age}
            onSubmit={handleSubmit}
            onSubmitSuccess={handleSubmitSuccess}
            onBack={handleOnBack}
            isDeleteAllowed={!!isDelete}
            onDelete={handleOnDelete}/>
    );
    
    const customerName = getByText(/FACUNDO 2/i);
    const customerAge = getByText("30");
    const customerDNI = getByText(/30000001/i);
    expect(customerName).toBeInTheDocument();
    expect(customerAge).toBeInTheDocument();
    expect(customerDNI).toBeInTheDocument();
  });


  // it("Reacts to clicks functions", () => {
  //   const mockFn = jest.fn();
  //   const handleSubmitTest = () => {
  //       mockFn();
  //   }
  //   const { queryByTestId } = renderWithRedux(
  //       <CustomerData
  //           id={customer.id}
  //           name={customer.dni}
  //           dni={customer.name}
  //           age={customer.age}
  //           onSubmit={handleSubmitTest}
  //           onSubmitSuccess={handleSubmitSuccess}
  //           onBack={handleOnBack}
  //           isDeleteAllowed={!!isDelete}
  //           onDelete={handleOnDelete}/>
  //   );

  //   fireEvent.click(queryByTestId("btn-submit"))
  //   expect(mockFn).toHaveBeenCalled();
  // });

