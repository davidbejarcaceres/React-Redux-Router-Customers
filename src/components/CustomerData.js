import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CustomersActions from './CustomersActions'
import { Button } from '@material-ui/core'
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_VIEW } from '../constants/permissions';

const CustomerData = ({ id, name, dni, age, onBack, isDeleteAllowed, onDelete }) => {
    return (
        <div>
            <div className="customer-data">
                <h2> Datos del cliente</h2>
                <div><strong>Name: </strong> <i>{name}</i></div>
                <div><strong>DNI: </strong> <i>{dni}</i></div>
                <div><strong>Age</strong> <i>{age}</i></div>
            </div>

            <CustomersActions>
                <Button type="submit" onClick={onBack} variant="contained" color="secundary">
                    Volver
                </Button>

                {isDeleteAllowed &&
                    <Button type="submit" onClick={() => onDelete(id)} variant="contained" color="secundary">
                        Delete
                    </Button>
                }
            </CustomersActions>
        </div>
    )
}

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllowed: PropTypes.bool,
    onDelete: PropTypes.func
}

export default accessControl([CUSTOMER_VIEW])(CustomerData)
