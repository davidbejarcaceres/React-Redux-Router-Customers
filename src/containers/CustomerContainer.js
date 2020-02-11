import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppFrame from "../components/AppFrame"
import { getCustomerByDni } from '../selectors/customers'
import { Route, withRouter } from 'react-router-dom';
import CustomerData from "../components/CustomerData"
import CustomerEdit from "../components/CustomerEdit"

{/* <p>Datos de cliente {props.customer.name}</p> */ }

const CustomerContainer = props => {
    debugger

    // const pathEdit = `customers/${props.customer.dni}/customers`

    const renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => (
                match ? <CustomerEdit {...props.customer} /> : <CustomerData {...props.customer} />
            )
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
}

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
})

export default withRouter(connect(mapStateToProps, null)(CustomerContainer))
