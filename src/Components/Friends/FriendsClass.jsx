import React from "react";
import defPhoto from "../../assets/default-photo.png";
import axios from "axios";
import style from './css/friendPage.module.css'

export default class Friends extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePageUser}&count=${this.props.pageUser}`)
            .then(res => {
                const users = res.data.items;
                this.props.setUsers(users);
                const totalUsers = res.data.totalCount;
                this.props.setTotalUsersCount(totalUsers)

            })
    };

    onPageChange = (activePage) => {
        this.props.setActivePageUser(activePage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${activePage}&count=${this.props.pageUser}`)
            .then(res => {
                const users = res.data.items;
                this.props.setUsers(users)
            })
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCountUsers / this.props.pageUser)
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

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
                {pages.map(activePage => {
                    return <span onClick={() => {
                        this.onPageChange(activePage)
                    }} className={`${style.default} ${this.props.activePageUser === activePage && style.active}`}>{activePage}</span>
                })}
            </div>
        )
    }
}