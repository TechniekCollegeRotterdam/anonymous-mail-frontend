import React from 'react';
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux"
import PropTypes from 'prop-types'

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

/*AuthRoute.propTypes = {
    authenticated: PropTypes.bool.isRequired
}*/

export default connect(mapStateToProps)(AuthRoute);
