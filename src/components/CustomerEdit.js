import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from "redux-form"
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { setPropsAsInitial } from "../helpers/setPropsAsInivial";
import CustomersActions from './CustomersActions';



const MyField = ({ input, meta, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type="text" />
        {
            meta.touched && meta.error && <span>{meta.error}</span>
        }

    </div>
)

// const isRequired = value => (!value && "Este campo es requerido"
// )
const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
)

// Validates globaly the fields of the form
const validate = values => {
    const error = {};

    if (!values.name) {
        error.name = "El campo nombre es requerido";

    }

    if (!values.dni) {
        error.dni = "El Dni es un campo obligatorio";
    }

    return error;
};



const CustomerEdit = ({ name, dni, age, handleSubmit, submitting }) => {
    return (
        <div>
            <h1>Edición del cliente</h1>
            <form onSubmit={handleSubmit}>
                <Field name="name" component={MyField} label="Nombre:" type="text"></Field>
                <Field name="dni" component={MyField} label="DNI:" type="text"></Field>
                <Field name="age" component={MyField} label="Age:" validate={[isNumber]} type="number"></Field>
                <br></br>
                <CustomersActions>
                    <Button type="submit" disabled={submitting} variant="contained" color="primary">
                        Submit
                    </Button>
                </CustomersActions>

            </form>

        </div>
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
}

const CustomerEditForm = reduxForm(
    {
        form: 'CustomerEdit',
        validate
    })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm)