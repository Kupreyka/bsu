import React from "react";
import defPhoto from "../../assets/default-photo.png";
import style from './css/friendPage.module.css'
import {NavLink} from "react-router-dom";

const Friends = (props) => {

    let pageCount = Math.ceil(props.totalCountUsers / props.pageUser)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(activePage => {
                return <span onClick={() => {
                    props.onPageChange(activePage)
                }}
                             className={`${style.default} ${props.activePageUser === activePage && style.active}`}>{activePage}</span>
            })}
            {props.users.map(user => <div key={user.id}><div>
                <NavLink to={/home/ + user.id}>
                    <img
                    src={user.photos.small != null ? user.photos.small : defPhoto}/>
                </NavLink>
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

        </div>
    )
}

export default Friends