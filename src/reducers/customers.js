import { handleActions } from "redux-actions"
import { FETCH_CUSTOMERS, DELETE_CUSTOMER, INSERT_CUSTOMER, UPDATE_CUSTOMER } from "../constants"

export const customers = handleActions({
    ["SAGAS_FETCH_CUSTOMERS_ASYNC"]: (state, action) => [...action.payload],
    ["SAGAS_INSERT_CUSTOMERS_ASYNC"]: (state, action) => [...state, action.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
    ["SAGAS_DELETE_CUSTOMERS_ASYNC"]: (state, action) => state.filter(c => c.id !== action.payload),
    ["SAGAS_UPDATE_CUSTOMERS_ASYNC"]: (state, action) => {
        const customerPayload = action.payload;
        const { id } = customerPayload; // i = 2 name='nuevo nombre'
        // [ { id: 1, name: '', ... }, 
        //   { id: 2, name: 'viejo nombre', ... },
        //   { id: 3, name: '', ... }]
        const customers = state;
        const initialValue = [];
        // primer iteracion
        // acc = []
        // { id: 1, name: '', ... }
        // [ { id: 1, name: '', ... } ] 

        // segunda iteración 
        // acc = [ { id: 1, name: '', ... } ] 
        // { id: 2, name: 'viejo nombre', ... } => { id: 2, name: 'nuevo nombre', ... }
        // [ { id: 1, name: '', ... }, { id: 2, name: 'nuevo nombre', ... } ]

        // tercera iteración 
        // acc = [ { id: 1, name: '', ... }, { id: 2, name: 'nuevo nombre', ... } ]
        const newCustomers = customers.reduce((acc, customer) => {
            if (customer.id === id) {
                return [...acc, customerPayload];
            } else {
                return [...acc, customer];
            }
        }, initialValue);

        return newCustomers;
    },
    [UPDATE_CUSTOMER]: (state, action) => {
        const customerPayload = action.payload;
        const { id } = customerPayload; // i = 2 name='nuevo nombre'
        // [ { id: 1, name: '', ... }, 
        //   { id: 2, name: 'viejo nombre', ... },
        //   { id: 3, name: '', ... }]
        const customers = state;
        const initialValue = [];
        // primer iteracion
        // acc = []
        // { id: 1, name: '', ... }
        // [ { id: 1, name: '', ... } ] 

        // segunda iteración 
        // acc = [ { id: 1, name: '', ... } ] 
        // { id: 2, name: 'viejo nombre', ... } => { id: 2, name: 'nuevo nombre', ... }
        // [ { id: 1, name: '', ... }, { id: 2, name: 'nuevo nombre', ... } ]

        // tercera iteración 
        // acc = [ { id: 1, name: '', ... }, { id: 2, name: 'nuevo nombre', ... } ]
        const newCustomers = customers.reduce((acc, customer) => {
            if (customer.id === id) {
                return [...acc, customerPayload];
            } else {
                return [...acc, customer];
            }
        }, initialValue);

        return newCustomers;
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.id !== action.payload)
}, []);