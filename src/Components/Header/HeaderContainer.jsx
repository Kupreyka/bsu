import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {Auth} from "../../redux/Auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.Auth()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
})

export default connect(mapStateToProps, {Auth})(HeaderContainer);