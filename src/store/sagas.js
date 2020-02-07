import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects'
import { fetchCustomers } from '../actions/fetchCustomers';
import { FETCH_CUSTOMERS } from '../constants';
import { createAction } from 'redux-actions';



var customersOffline = [
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function descargar() {

    sleep(5000)
    return customersOffline

}

async function downloadCustomers() {

    return await fetch("http://localhost:3001/customers").catch(error => {
        console.log("Error, json-server not started");
    }).then(payload => {
        return payload.json()
    })
}


function* getUsers(action) {
    try {
        const usuarios = yield downloadCustomers()
        yield put({ type: "SAGAS_FETCH_CUSTOMERS_ASYNC", payload: usuarios })
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }

}


function* mySaga() {
    yield takeEvery("SAGAS_FETCH_CUSTOMERS", getUsers);
}


export default mySaga;