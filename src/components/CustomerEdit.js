import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from "redux-form"
import Button from '@material-ui/core/Button';


const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h1>Edición del cliente</h1>
            <form action="">
                <div>
                    <label htmlFor="name">Name: </label>
                    <Field name="name" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="dni">DNI: </label>
                    <Field name="dni" component="input" type="text"></Field>
                </div>
                <div>
                    <label htmlFor="age">Age: </label>
                    <Field name="age" component="input" type="text"></Field>
                </div>
                <br></br>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>

        </div>
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
}

export default reduxForm({ form: "CustomerEdit" })(CustomerEdit)