import style from './Menu.module.css'

const Menu = () => {
    return(
        <div className={style.menu}>
            <a href="/">Home</a>
            <a href="/">Message</a>
            <a href="/">Feed</a>
        </div>
    )
}

export default Menu;