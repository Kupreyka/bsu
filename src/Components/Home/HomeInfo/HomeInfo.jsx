import React, {useState} from "react";
import Preloader from "../../Friends/Preloader/Preloader";
import StatusHooks from "../Posts/StatusHooks";
import defPhoto from "../../../assets/default-photo.png";
import style from './HomeInfo.module.css'
import ProfileDataFormRedux from "./ProfileDataForm";
import {Button, Input} from "@material-ui/core";



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

    return (<>
            <div><img src={props.profile.photos.large || defPhoto} className={style.mainPhoto}/></div>
            {/*{props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}*/}
            {props.isOwner && <label htmlFor="contained-button-file">
                <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onMainPhotoSelected} />
                <Button variant="contained" component="span">
                    Upload
                </Button>
            </label>}
            {editMode ?
                <ProfileDataFormRedux onSubmit={onSubmit} profile={props.profile} initialValues={props.profile}/> :
                <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/>}
            <StatusHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/>
        </>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><b>{contactTitle}:</b> <a href={contactValue}>{contactValue}</a></div>
}

const ProfileData = (props) => {
    return (
        <div>
            <div><b>Имя:</b>{props.profile.fullName}</div>
            <div><b>Обо мне:</b> {(props.profile.aboutMe == null) ? <span>Нету информации</span> :
                <span>{props.profile.aboutMe}</span>}
            </div>
            <div>
                <b>Нахожусь в поиске работы: </b>{props.profile.lookingForAJob ? 'Да' : 'Нет'}
            </div>
            {props.profile.lookingForAJob &&
            <div>
                <b>Скиллы: </b>{props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Контакты:</b>{Object.keys(props.profile.contacts).map(key => {
                return <Contact contactTitle={key} contactValue={props.profile.contacts[key]}/>
            })}
            </div>
            {props.isOwner && <div>
                <button onClick={props.goToEditMode}>Изменить</button>
            </div>}
        </div>
    )
}

export default HomeInfo;