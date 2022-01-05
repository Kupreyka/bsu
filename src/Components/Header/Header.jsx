import style from './Header.module.css'
import logo from './images/logo.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <div className={style.header}>
            <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
            <div className={style.registration}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Sign in</NavLink>}
            </div>
        </div>
    )
}

export default Header;