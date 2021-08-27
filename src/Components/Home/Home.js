import style from './Home.module.css'
import Posts from "./Posts/Posts";

const Home = () => {
    return (
        <div className={style.home}>
            <div>avatar</div>
            <div>info</div>
            <Posts/>
        </div>
    )
}

export default Home