import React from "react";
import s from './FormsControls.module.css'
import {Checkbox} from "@material-ui/core";
import {Alert} from "@mui/material";

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
            {hasError && <Alert variant="filled" severity="error">
                {meta.error}
            </Alert>}
            {/*{hasError && <span>{meta.error}</span> }*/}
        </div>
    )
}

export const CheckboxCustom = ({input, meta, ...props}) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Checkbox {...label} {...props} {...input} />
    )
}
