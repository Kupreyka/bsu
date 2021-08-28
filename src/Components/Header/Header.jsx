import style from './Header.module.css'
import logo from './images/logo.png'
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <div className={style.header}>
            <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
            <div className={style.registration}>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Header;