import React from "react";
import {Redirect, Route} from "react-router-dom"
import {connect} from "react-redux"
import PropTypes from "prop-types"

const AuthRoute =({component: Component, authenticated, ...rest}) => (
    <Route
        {...rest}
        render={
            (props) => authenticated === true ? <Redirect to={'/dashboard'}/> : <Component {...props}/>
        }
    />
)

const mapStateToProps =(state) => ({
    authenticated: state.user.authenticated
})

AuthRoute.propTypes = {
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(AuthRoute)
