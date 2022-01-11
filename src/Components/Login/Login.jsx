import React from "react";
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    const onSubmit = value => {
        console.log(value)
    }
    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'Login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'Password'} component={'input'} type={'password'}/>
            </div>
            <div>
                <Field type="checkbox" name={'Remember me'} component={'input'}/> Remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login