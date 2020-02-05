import { FETCH_CUSTOMERS } from "../constants";
import { createAction } from "redux-actions";

var customers = [
    {
        "id": "30000001",
        "dni": "30000001",
        "name": "FACUNDO 2",
        "age": 30
    },
    {
        "id": "500000",
        "dni": "500000",
        "name": "CARLOS SANCHES",
        "age": 40
    },
    {
        "dni": "6868686",
        "name": "Nuevo cliente",
        "age": 10,
        "id": "XSCfaW5"
    },
    {
        "name": "NUEVO CLIENTE 1",
        "dni": "99999",
        "age": 11,
        "id": "kxmVQVd"
    }
]

export const fetchCustomers = () => {
    return { type: FETCH_CUSTOMERS, payload: null }
};

// export const fetchCustomers = async () => createAction(FETCH_CUSTOMERS)