import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getStatus, getUserId, savePhoto, saveProfile, updateProfileStatus} from "../../redux/Profile-page-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class HomeContainer extends React.Component {

    checkUpdate() {
        let UserId = this.props.match.params.UserId;
        if (!UserId) {
            UserId = this.props.loginId
        }
        this.props.getUserId(UserId)
        this.props.getStatus(UserId)
    }

    componentDidMount() {
        this.checkUpdate()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.UserId != prevProps.match.params.UserId) {
            this.checkUpdate()
        }
    }

    render() {
        return (
            <Home {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.UserId} savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
        )
    }
}


let mapStateToProps = (state) => (
    {
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        loginId: state.Auth.id,
    }
)

export default compose(
    connect(mapStateToProps, {getUserId, getStatus, updateProfileStatus, savePhoto, saveProfile}),
    withRouter,
    WithAuthRedirect
)(HomeContainer)

