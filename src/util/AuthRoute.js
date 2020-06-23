import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux"

const AuthRoute = ({component: Component, authenticated, ...rest}) => (
    <Route
        {...rest}
        render={(props) =>
            authenticated === true ? <Component {...props}/> : <Redirect to={'/dashboard'}/>}
    />
)

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
})

export default connect(mapStateToProps)(AuthRoute);
