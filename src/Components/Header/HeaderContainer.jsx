import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData} from "../../redux/Auth-reducer";
import {UsersAPI} from "../../API/Api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        UsersAPI.auth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data;
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