import React, {useEffect, useState} from "react";
import style from './../HomeInfo/HomeInfo.module.css'

const StatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setEditMode(true)
    }

    const inactiveEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className="status">
            {!editMode &&
            <div>
                <span
                    onClick={props.isOwner && activeEditMode}>{props.isOwner ? props.status || 'Установить статус' : props.status}</span>
            </div>
            }
            {editMode &&
            <div>
                <input className={style.statusInput} onChange={onStatusChange} autoFocus={true}
                       onBlur={inactiveEditMode} type="text"
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default StatusHooks