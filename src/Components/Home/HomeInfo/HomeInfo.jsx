import React from "react";
import Preloader from "../../Friends/Preloader/Preloader";
import {StatusContainer} from "../StatusContainer";
import {updateProfileStatus} from "../../../redux/Profile-page-reducer";

const HomeInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (<>
            <div>{props.profile.fullName}</div>
            <StatusContainer status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            <div><img src={props.profile.photos.large}/></div>
            <div>Обо мне: { (props.profile.aboutMe == null) ? <span>Нету информации</span> : <span>{props.profile.aboutMe}</span> }</div>

        </>
    )
}

export default HomeInfo;