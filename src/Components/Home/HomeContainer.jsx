import React from "react";
import Home from "./Home";
import axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../redux/Profile-page-reducer";
import {withRouter} from "react-router-dom";


class HomeContainer extends React.Component {

    componentDidMount() {
        let UserId = this.props.match.params.UserId;
        if (!UserId) {
            UserId = 17315
        }
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + UserId)
            .then(response => {
                const profile = response.data;
                this.props.setProfile(profile)
            })
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

export default connect(mapStateToProps, {setProfile})(withRouter(HomeContainer));
