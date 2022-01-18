import React, {useState} from "react";

const StatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

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
                <span onDoubleClick={activeEditMode}>{props.status || 'Установить статус'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={inactiveEditMode} type="text"
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default StatusHooks