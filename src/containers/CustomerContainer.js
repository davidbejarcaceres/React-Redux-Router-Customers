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
import { deleteCustomer } from '../actions/deleteCustomer'


const CustomerContainer = props => {
    useEffect(() => {
        const getCustomers = async () => {
            console.log("CustomerContainer: NO CUSTOMER PRESENT, FETCHING CUSTOMER");
            props.fetchCustomers()
        }
        (!props.customer) && getCustomers()
    })

    const handleSubmit = async (values) => {
        console.log(JSON.stringify(values));
        return await props.updateCustomer(values)
    }

    const handleOnBack = () => {
        props.history.goBack()
    }

    const handleSubmitSuccess = () => {
        props.history.goBack()
    }

    const handleOnDelete = async (customerID) => {
        console.log("Handle on delete user:" + customerID);     
        await props.deleteCustomer(customerID)
        props.history.goBack()
    }


    const renderCustomerControl = (isEdit, isDelete) => (
        <Route path="/customers/:dni/edit" children={
            ({ match }) => {
                if (props.customer) {
                    const ComponentController = isEdit ? CustomerEdit : CustomerData
                    return <ComponentController
                            {...props.customer}
                            onSubmit={handleSubmit}
                            onSubmitSuccess={handleSubmitSuccess}
                            onBack={handleOnBack}
                            isDeleteAllowed={!!isDelete}
                            onDelete={handleOnDelete}/>
                } else {
                    return <CircularProgress />
                }
            }
        } ></Route >
    )

    const  renderBody =  () => (
        <Route path="/customers/:dni/edit" children={
            ({ match: isEdit }) => {
                return <Route path="/customers/:dni/del" children={
                    ({match: isDelete}) =>{
                        return renderCustomerControl(isEdit, isDelete)
                    }
                }
                ></Route>
            }
        }>

        </Route>
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

export default withRouter(connect(mapStateToProps, { fetchCustomers, updateCustomer, deleteCustomer })(CustomerContainer))
