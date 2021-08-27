import style from './Header.module.css'
import logo from './images/logo.png'

const Header = () => {
    return(
        <div className={style.header}>
            <a href="/"><img src={logo} alt="logo"/></a>
            <div className={style.registration}>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default Header;