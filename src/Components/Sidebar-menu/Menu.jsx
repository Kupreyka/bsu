import style from './Menu.module.css'
import {NavLink} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';


const Menu = () => {
    return(
        <div className={style.menu}>
            <div className={style.menuItem}>
                <NavLink to='/home' activeClassName={style.active}><AccountCircleIcon/>Моя страница</NavLink>
                <NavLink to="/message" activeClassName={style.active}><EmailIcon/>Мессенджер</NavLink>
                <NavLink to="/feed" activeClassName={style.active}><NewspaperIcon/>Новости</NavLink>
                <NavLink to="/friends" activeClassName={style.active}><PeopleAltIcon/>Друзья</NavLink>
            </div>
        </div>
    )
}

export default Menu;