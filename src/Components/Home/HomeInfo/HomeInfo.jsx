import React, {useState} from "react";
import Preloader from "../../Friends/Preloader/Preloader";
import StatusHooks from "../Posts/StatusHooks";
import defPhoto from "../../../assets/default-photo.png";
import style from './HomeInfo.module.css'
import ProfileDataFormRedux from "./ProfileDataForm";
import {Button, Input} from "@material-ui/core";
import PostsContainer from "../Posts/PostsContainrt";


const HomeInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    const onSubmit = value => {
        props.saveProfile(value)
        setEditMode(false)
    }

    return (<div className={style.mainProfile}>
            <div className={style.mainProfileItem}>
                <div>
                    <div className={style.profilePhoto}>
                        <img src={props.profile.photos.large || defPhoto} className={style.mainPhoto}/>
                        {/*{props.isAuth && <div>online</div>}*/}
                    </div>
                    {/*{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}*/}
                    {props.isOwner && <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file"
                               onChange={onMainPhotoSelected}/>
                        <Button variant="contained" component="span">
                            Обновить фотографию
                        </Button>
                    </label>}
                </div>
                <div>
                    <div className={style.profileFullName}>{props.profile.fullName}</div>
                    <StatusHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/>
                    {editMode ?
                        <ProfileDataFormRedux onSubmit={onSubmit} profile={props.profile}
                                              initialValues={props.profile}/> :
                        <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                            setEditMode(true)
                        }}/>}
                    <PostsContainer/>
                </div>
                <div className={style.statusPage}>online</div>
            </div>


        </div>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><b>{contactTitle}:</b> <a href={contactValue}>{contactValue}</a></div>
}

const ProfileData = (props) => {
    return (
        <div className={style.infoInProfile}>
            <div><span>Обо мне:</span> {(props.profile.aboutMe == null) ? <b>Нету информации</b> :
                <b>{props.profile.aboutMe}</b>}
            </div>
            <div>
                <span>Нахожусь в поиске работы: </span>{props.profile.lookingForAJob ? <b>Да</b> : <b>Нет</b>}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <span>Скиллы: </span><b>{props.profile.lookingForAJobDescription}</b>
            </div>
            }
            <div>
                <span>Контакты:</span>{Object.keys(props.profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
            {props.isOwner && <div>
                <Button className="redBtn" onClick={props.goToEditMode} variant="contained">Редактировать</Button>
            </div>}
        </div>
    )
}

export default HomeInfo;