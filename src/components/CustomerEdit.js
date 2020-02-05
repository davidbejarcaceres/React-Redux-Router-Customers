import React from 'react'
import PropTypes from 'prop-types'

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h1>Edición del cliente</h1>
            <h3>Nombre: {name}  /  DNI: {dni}  /  Edad: {age}</h3>
        </div>
    )
}

CustomerEdit.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
}

export default CustomerEdit
