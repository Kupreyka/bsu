import style from './Menu.module.css'
import {NavLink} from "react-router-dom";


const Menu = () => {
    return(
        <div className={style.menu}>
            <NavLink to='/home' activeClassName={style.active}>Home</NavLink>
            <NavLink to="/message" activeClassName={style.active}>Message</NavLink>
            <NavLink to="/feed" activeClassName={style.active}>Feed</NavLink>
        </div>
    )
}

export default Menu;