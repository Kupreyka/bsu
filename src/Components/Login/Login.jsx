import React from "react";
import {Field, reduxForm} from "redux-form";
import {CheckboxCustom, Input} from "../common/FormsControls";
import {required} from "../../utilities/validator";
import {connect} from "react-redux";
import {login} from "../../redux/Auth-reducer";
import {Redirect} from "react-router-dom";
import {Helmet} from "react-helmet";
import style from "./Login.module.css"
import {Button} from "@material-ui/core";

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
                <Field type="checkbox" name={'rememberMe'} component={CheckboxCustom}/> Remember me
            </div>
            <div>
                <button>
                    <Button className={style.customBtn} variant="contained">Войти</Button>
                </button>
            </div>
            {props.captcha && <img src={props.captcha}/>}
            {props.captcha && <Field name={'captcha'} component={Input}/>}
            {props.error &&
            <div>{props.error}</div>
            }
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = value => {
        props.login(value.email, value.password, value.rememberMe, value.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/home'}/>
    }

    return (
        <div className={style.login}>
            <Helmet>
                <title>Авторизация</title>
            </Helmet>
            <h1>Вход</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha}/>
        </div>
    )
}



let mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    captcha: state.Auth.captcha
})


export default connect(mapStateToProps, {login})(Login)