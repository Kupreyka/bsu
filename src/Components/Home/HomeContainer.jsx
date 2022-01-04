import React from "react";
import Home from "./Home";
import axios from "axios";
import {connect} from "react-redux";
import {setProfile, setUsers} from "../../redux/Profile-page-reducer";


class HomeContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
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

export default connect(mapStateToProps, {setProfile})(HomeContainer);
