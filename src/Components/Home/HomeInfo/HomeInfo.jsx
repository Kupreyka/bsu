import React from "react";
import Preloader from "../../Friends/Preloader/Preloader";
import StatusHooks from "../Posts/StatusHooks";
import defPhoto from "../../../assets/default-photo.png";

const HomeInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }

    return (<>
            <div><img src={props.profile.photos.large || defPhoto}/></div>
            {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            <div>{props.profile.fullName}</div>
            <StatusHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            <div>Обо мне: { (props.profile.aboutMe == null) ? <span>Нету информации</span> : <span>{props.profile.aboutMe}</span> }</div>

        </>
    )
}

export default HomeInfo;