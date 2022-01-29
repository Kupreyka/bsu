import React from "react";
import {Field, reduxForm} from "redux-form";
import {CheckboxCustom, Input, Textarea} from "../../common/FormsControls";
import style from './HomeInfo.module.css'
import SendIcon from '@mui/icons-material/Send';
import {Button} from "@material-ui/core";

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error &&
            <div className={style.error}>{props.error}</div>
            }
            <div><b>Имя:</b><Field name={'fullName'} component={Input}/></div>
            <div><b>Обо мне:</b> <Field name={'aboutMe'} component={Textarea}/>
            </div>
            <div>
                <b>Нахожусь в поиске работы: </b><Field type={'checkbox'} name={'lookingForAJob'} component={CheckboxCustom}/>
            </div>
            <div>
                <b>Скиллы:</b><Field component={Textarea} name={'lookingForAJobDescription'}/>
            </div>
            <div>
                <b>Контакты:</b>{Object.keys(props.profile.contacts).map(key => {
                return (
                    <div>
                        <b>{key}:</b>{<Field placeholder={key} name={"contacts." + key} component={Input}/>}
                    </div>
                )
            })}

            </div>
            <div>
                <button><Button variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button></button>

            </div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormRedux