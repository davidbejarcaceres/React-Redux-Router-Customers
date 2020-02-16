import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppFrame from "../components/AppFrame"
import { withRouter } from 'react-router-dom';
import CustomerEdit from "../components/CustomerEdit"
import { fetchCustomers } from './../actions/fetchCustomers';


const NewCustomerContainer = props => {


    const handleSubmit = async (values) => {
        // console.log(JSON.stringify(values));
        // return await props.updateCustomer(values)
    }

    const handleOnBack = () => {
        props.history.goBack()
    }

    const handleSubmitSuccess = () => {
        props.history.goBack()
    }


    const renderBody = () => (
        <div>
            <h1>Hola Mundo</h1>
        </div>
    )

    return (
        <div>
            <AppFrame header={`Cliente ${props.dni}`}
                body={renderBody()}
            ></AppFrame>
        </div>
    )
}

NewCustomerContainer.propTypes = {

}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(mapStateToProps, null)(NewCustomerContainer))