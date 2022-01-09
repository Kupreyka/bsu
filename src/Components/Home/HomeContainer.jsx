import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getUserId} from "../../redux/Profile-page-reducer";
import {withRouter} from "react-router-dom";


class HomeContainer extends React.Component {

    componentDidMount() {
        let UserId = this.props.match.params.UserId;
        if (!UserId) {
            UserId = 17315
        }
        this.props.getUserId(UserId)
    }

    render() {
        return (
            <Home {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state) => (
    {
        profile: state.ProfilePage.profile,
        isAuth: state.Auth.isAuth
    }
)

export default connect(mapStateToProps, {getUserId})(withRouter(HomeContainer));
