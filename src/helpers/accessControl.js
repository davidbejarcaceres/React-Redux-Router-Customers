import React, { Component } from 'react';
import { connect } from 'react-redux';

export const accessControl = premissionsRequired => WrappedComponent => {
    const SecuredControl = class extends Component {
        render() {
            const { permissions } = this.props.user
            const isAllow = premissionsRequired.every(p => permissions.indexOf(p) >= 0)
            if (!isAllow)
                return (<div><i>No tiene permisos para editar</i></div>)

            return <WrappedComponent {...this.props} />;
        }
    }

    return connect(state => ({ user: state.user }))(SecuredControl)
}