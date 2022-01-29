import React from "react";
import s from './FormsControls.module.css'
import {Checkbox} from "@material-ui/core";

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

export const Input = ({input, meta, ...props}) => {

    let hasError = meta.touched && meta.error;

    return (
        <div className={s.formsControls + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span> }
        </div>
    )
}

export const CheckboxCustom = ({input, meta, ...props}) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Checkbox {...label} {...props} {...input} />
    )
}
