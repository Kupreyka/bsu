import React from "react";
import s from './FormsControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return (
        <div className={s.formsControls + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span> }
        </div>
    )
}