import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppFrame from "../components/AppFrame"
import { getCustomerByDni } from '../selectors/customers'
import { Route, withRouter } from 'react-router-dom';
import CustomerData from "../components/CustomerData"
import CustomerEdit from "../components/CustomerEdit"
import { fetchCustomers } from './../actions/fetchCustomers';
import { CircularProgress } from '@material-ui/core'
import { updateCustomer } from '../actions/updateCustomer'



{/* <p>Datos de cliente {props.customer.name}</p> */ }

const CustomerContainer = props => {
    useEffect(() => {
        const getCustomers = async () => {
            console.log("CustomerContainer: NO CUSTOMER PRESENT, FETCHING CUSTOMER");
            props.fetchCustomers()
        }
        (!props.customer) && getCustomers()
    }, [])

    const handleSubmit = values => {
        console.log(JSON.stringify(values));
        props.updateCustomer(values)
    }

    const handleOnBack = () => {
        props.history.goBack()
    }


    const renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                if (props.customer) {
                    const ComponentController = match ? CustomerEdit : CustomerData
                    return <ComponentController {...props.customer} onSubmit={handleSubmit} onBack={handleOnBack} />
                } else {
                    return <CircularProgress />
                }
            }
        } ></Route >
    )

    return (
        <div>
            <AppFrame header={`Cliente ${props.dni}`}
                body={renderBody()}
            ></AppFrame>
        </div>
    )
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object.isRequired,
    age: PropTypes.number.isRequired,
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})

const mapDispatchToProps = dispatch => ({
    fetchCustomers: () => dispatch(fetchCustomers()),
    updateCustomer: () => dispatch(updateCustomer())
})

export default withRouter(connect(mapStateToProps, { fetchCustomers, updateCustomer })(CustomerContainer))
