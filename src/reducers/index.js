import { combineReducers } from 'redux';
import { customers } from './customers';
import { reducer as reduxForm } from 'redux-form';
import { CUSTOMER_VIEW, CUSTOMER_LIST, CUSTOMER_EDIT } from './../constants/permissions';


export default combineReducers({
    customers,
});