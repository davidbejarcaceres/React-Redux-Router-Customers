import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import AppFrame from "../components/AppFrame"
import CustomersActions from "../components/CustomersActions"

const HomeContainer = props => {

    const handleOnClick = () => {
        console.log("Click Home Container");
        props.history.push("/customers")
        console.log(props);

    }

    return (
        <div>
            <AppFrame
                header='Inicio'
                body={
                    <div>
                        Esta es la pantalla prinicpal
                        <img src="https://lh6.googleusercontent.com/C0YXQ2ZHuvYkB2GEA4OfkzlBkU56stTvOxeJCQQGaFameldhTRQtzilAcMRveF4SwL3Xfw1muoPE7g=w1360-h677-rw" alt="" />
                        <CustomersActions>
                            <button onClick={handleOnClick} >Listado de clientes</button>

                        </CustomersActions>
                    </div>
                }

            ></AppFrame>
        </div>
    );
};

HomeContainer.propTypes = {

};

export default withRouter(HomeContainer);