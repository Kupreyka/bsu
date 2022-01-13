import style from './Header.module.css'
import logo from './images/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <div className={style.header}>
            <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
            <div className={style.registration}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                    : <NavLink to={'/login'}>Sign in</NavLink>}
            </div>
        </div>
    )
}

export default Header;