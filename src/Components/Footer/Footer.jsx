import style from './Footer.module.css'

const Footer = () => {
    return(
        <div className={style.footer}>
            <div className={style.info}><span>Kupreychik Kirill</span> {new Date().getFullYear()}</div>
        </div>
    )
}


export default Footer;