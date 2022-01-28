import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls";
import {required} from "../../utilities/validator";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'email'} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} type={'password'}
                       validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/> Remember me
            </div>
            <div>
                <button>Log in</button>
            </div>
            {props.error &&
            <div>{props.error}</div>
            }
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = value => {
        props.login(value.email, value.password, value.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/home'}/>
    }

    return (
        <>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}


let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})


export default connect(mapStateToProps, {login})(Login)