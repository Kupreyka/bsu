import React from "react";
import Home from "./Home";
import {connect} from "react-redux";
import {getUserId} from "../../redux/Profile-page-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
        profile: state.ProfilePage.profile
    }
)

export default compose(
    connect(mapStateToProps, {getUserId}),
    withRouter,
    WithAuthRedirect
)(HomeContainer)

