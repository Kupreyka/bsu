import React from "react";
import defPhoto from "../../assets/default-photo.png";
import style from './css/friendPage.module.css'

const Friends = (props) => {

    let pageCount = Math.ceil(props.totalCountUsers / props.pageUser)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {props.users.map(user => <div key={user.id}>
                <div><img
                    src={user.photos.small != null ? user.photos.small : defPhoto}/>
                </div>
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
            {pages.map(activePage => {
                return <span onClick={() => {
                    props.onPageChange(activePage)
                }}
                             className={`${style.default} ${props.activePageUser === activePage && style.active}`}>{activePage}</span>
            })}
        </div>
    )
}

export default Friends