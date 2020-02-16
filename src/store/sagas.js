import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects'
import { fetchCustomers } from '../actions/fetchCustomers';
import { FETCH_CUSTOMERS } from '../constants';
import { createAction } from 'redux-actions';
import { apiGet, apiPut, apiPost, apiDelete } from "../api/index"
import { urlCustomers } from "../api/urls"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function downloadCustomers() {
    await sleep(1000)
    return await apiGet(urlCustomers)
}

async function updateCustomer(id, customer) {
    await sleep(1000)
    await apiPut(urlCustomers, id, customer)

}

async function insertCustomer(customer) {
    await sleep(1000)
    await apiPost(urlCustomers, customer);

}

async function deleteCustomer(id) {
    debugger
    await sleep(1000)
    await apiDelete(urlCustomers, id);

}




function* getUsers(action) {
    try {
        const usuarios = yield downloadCustomers()
        yield put({ type: "SAGAS_FETCH_CUSTOMERS_ASYNC", payload: usuarios })
    } catch (e) {
        yield put({ type: "USER_FETCH_FAILED", message: e.message });
    }

}

function* updateUser(action) {
    try {
        const { id } = action.payload
        const usuarioActualizado = yield updateCustomer(id, action.payload)
        yield put({ type: "SAGAS_UPDATE_CUSTOMER_ASYNC", payload: usuarioActualizado })
    } catch (e) {
        yield put({ type: "USER_UPDATE_FAILED", message: e.message });
    }
}

function* insertUser(action) {
    try {        
        const usuarioActualizado = yield insertCustomer(action.payload)
        yield put({ type: "SAGAS_INSERT_CUSTOMER_ASYNC", payload: usuarioActualizado })
    } catch (e) {
        yield put({ type: "USER_INSERT_FAILED", message: e.message });
    }
}

function* deleteUser(action) {
    try {        
        const id = action.payload
        const deletedUser = yield deleteCustomer(id)
        yield put({ type: "SAGAS_INSERT_CUSTOMER_ASYNC", payload: deletedUser })
    } catch (e) {
        yield put({ type: "USER_INSERT_FAILED", message: e.message });
    }
}



function* mySaga() {
    yield takeEvery("SAGAS_FETCH_CUSTOMERS", getUsers);
    yield takeEvery("SAGAS_UPDATE_CUSTOMER", updateUser);
    yield takeEvery("SAGAS_INSERT_CUSTOMER", insertUser);
    yield takeEvery("SAGAS_DELETE_CUSTOMER", deleteUser);
}


export default mySaga;