import axios from "axios";

const Friends = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                const users = res.data.items;
                props.setUsers(users)
            })
    }


    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <div><img src={user.photos.small != null ? user.photos.small : 'http://cdn.onlinewebfonts.com/svg/img_569204.png'}/></div>
                <div>
                    {user.followed
                        ? <button onClick={() => {
                            props.unfollow(user.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(user.id)
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

export default Friends;