import React from "react";
import defPhoto from "../../assets/default-photo.png";
import axios from "axios";

export default class Friends extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                const users = res.data.items;
                this.props.setUsers(users)
            })
    }

    render() {
        return (
            <div>

                {this.props.users.map(user => <div key={user.id}>
                    <div><img
                        src={user.photos.small != null ? user.photos.small : defPhoto}/>
                    </div>
                    <div>
                        {user.followed
                            ? <button onClick={() => {
                                this.props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(user.id)
                            }}>follow</button>
                        }
                    </div>
                    <div>
                        {user.name}
                    </div>
                    {/*<div>{user.status}</div>
                <div>{user.location.city}</div>
                <div>{user.location.country}</div>*/}
                </div>)}
            </div>
        )
    }
}