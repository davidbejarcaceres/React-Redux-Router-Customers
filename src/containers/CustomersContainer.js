import React, { useEffect, useState,  lazy, Suspense } from 'react';
import AppFrame from '../components/AppFrame';
import PropTypes from 'prop-types';
import CustomersList from '../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { connect } from "react-redux"
import { fetchCustomers } from '../actions/fetchCustomers';
import { withRouter } from 'react-router-dom';
import { getCustomers } from "../selectors/customers"
import { CircularProgress } from "@material-ui/core"

const CustomersContainer = ({ history, location, customers, fetchCustomers }) => {

    const CustomersListLazy = lazy(() => import('../components/CustomersList'));

    const handleAddNew = () => {
        console.log("CustomerContainer Click nuevo cliente");
        history.push("/customers/new")

    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        console.log("CustomersContiner: fetchCustomers");
        const fetch = async () => {
            fetchCustomers()
        }

        fetch()

    }, []);

    const renderBody = _customers => (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <CustomersListLazy
                customers={_customers}
                urlPath={"customers/"}/>
            </Suspense>
            <CustomersActions>
                <button onClick={handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div >
    )



    return (
        <div>
            <AppFrame
                header={"Listado de clientes"}
                body={
                    (customers.length > 0) ? renderBody(customers) :
                        <div>
                            <h1>Downloading Customers</h1>
                            <CircularProgress />

                        </div>
                }
            ></AppFrame>
        </div>
    );
};

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
};

CustomersContainer.defaultProps = {
    customers: []
};

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

export default withRouter(connect(mapStateToProps, { fetchCustomers })(CustomersContainer));