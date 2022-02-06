import React, {useState} from "react";
import defPhoto from "../../assets/default-photo.png";
import style from './css/friendPage.module.css'
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";

const Friends = (props, {portionSize = 10}) => {

    let pageCount = Math.ceil(props.totalCountUsers / props.pageUser)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={style.friendsPage}>
            <div className={style.pagination}>{portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(activePageSucces => {
                    return <span onClick={() => {
                        props.onPageChange(activePageSucces)
                    }}
                                 className={`${style.default} ${props.activePageUser === activePageSucces && style.active}`}>{activePageSucces}</span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}</div>
            {props.users.map(user => <div className={style.friendsItem} key={user.id}>
                <div>
                    <NavLink to={/home/ + user.id}>
                        <img
                            src={user.photos.small != null ? user.photos.small : defPhoto}/>
                    </NavLink>
                </div>
                <div className={style.friendsItemName}>
                    {user.name}
                </div>
                <div>
                    {user.followed
                        ? <Button className={style.btn} disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.unfollow(user.id)
                        }}>Отписаться</Button>
                        : <Button className={style.btn} disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.follow(user.id)
                        }}>Подписаться</Button>
                    }
                </div>
                {/*<div>{user.status}</div>
                <div>{user.location.city}</div>
                <div>{user.location.country}</div>*/}
            </div>)}

        </div>
    )
}

export default Friends