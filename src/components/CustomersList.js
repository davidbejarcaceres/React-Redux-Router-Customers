import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from "./CustomerListItem"
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_LIST } from '../constants/permissions';

const CustomersList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customers-list">

                {
                    customers.map(
                        c =>
                            <CustomerListItem
                                key={c.dni}
                                name={c.name}
                                dni={c.dni}
                                editAction={"Editar"}
                                delAction={"Eliminar"}
                                urlPath={urlPath}>
                            </CustomerListItem>
                    )
                }
            </div>
        </div>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
};

export default accessControl([CUSTOMER_LIST])(CustomersList);