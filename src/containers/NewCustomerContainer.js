import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import { getCustomerByDni } from "../selectors/customers";
import { withRouter } from "react-router-dom";
import CustomerEdit from "../components/CustomerEdit";
import { insertCustomer } from '../actions/insertCustomer'

const NewCustomerContainer = props => {
  const handleSubmit = async values => {
    console.log(JSON.stringify(values));
    props.insertCustomer({name: values.name, dni: values.dni, age: values.age})
    // return await props.updateCustomer(values)
  };

  const handleOnBack = () => {
    props.history.goBack();
  };

  const handleOnSubmitSuccess = () => {
    props.history.goBack();
  };

  const renderBody = () => {
    return (
      <CustomerEdit
        onSubmit={handleSubmit}
        onSubmitSuccess={handleOnSubmitSuccess}
        onBack={handleOnBack}
      ></CustomerEdit>
    );
  };

  return (
    <div>
      <AppFrame header={`Cliente ${props.dni}`} body={renderBody()}></AppFrame>
    </div>
  );
};

NewCustomerContainer.propTypes = {
  // dni: PropTypes.string.isRequired,
  // customer: PropTypes.object.isRequired,
  // age: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state, props)
});

const mapDispatchToProps = dispatch => ({
  // fetchCustomers: () => dispatch(fetchCustomers()),
  // updateCustomer: () => dispatch(updateCustomer())
});

export default withRouter(connect(mapStateToProps, { insertCustomer })(NewCustomerContainer));
