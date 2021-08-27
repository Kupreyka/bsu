import style from './Menu.module.css'
import {Link} from "react-router-dom";


const Menu = () => {
    return(
        <div className={style.menu}>
            <Link to='/home'>Home</Link>
            <Link to="/message">Message</Link>
            <Link to="/feed">Feed</Link>
        </div>
    )
}

export default Menu;