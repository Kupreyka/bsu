import React from "react";
import Friends from "./Friends";
import axios from "axios";


export default class FriendsClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const users = res.data;
                this.setState({users})
            })
    }


    render() {
        return (
            <div>
                <ul>
                    {this.state.users.map(user => <li>{user.name}</li>)}
                </ul>
            </div>
        )
    }
}