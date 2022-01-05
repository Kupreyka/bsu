import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setUserData} from "../../redux/Auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.setUserData(id, login, email)
                }
            })
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

export default connect(mapStateToProps, {setUserData})(HeaderContainer);