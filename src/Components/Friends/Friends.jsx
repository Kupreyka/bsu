
const Friends = (props) => {
    return(
        <div>
            {props.users.map(user => <div key={user.id}>
                <div><img src={user.photoUrl}/></div>
                <div>
                    {user.followed
                        ? <button onClick={()=> { props.unfollow(user.id) } }>Unfollow</button>
                        : <button onClick={()=> { props.follow(user.id) } }>follow</button>
                    }
                </div>
                <div>
                    {user.fullName}
                </div>
                <div>{user.status}</div>
                <div>{user.location.city}</div>
                <div>{user.location.country}</div>
            </div>)}
        </div>
    )
}

export default Friends;